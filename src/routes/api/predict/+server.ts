import { env } from '$env/dynamic/private'
import { error, json } from '@sveltejs/kit'

import type { RequestHandler } from './$types'

export type PredictResponse = {
	prediction: RoboflowClassificationResponse['outputs']['0']['classification_predictions']['predictions']['top']
	confidence: RoboflowClassificationResponse['outputs']['0']['classification_predictions']['predictions']['confidence']
}

type Payload = {
	image: string
}

type RoboflowClassificationResponse = {
	outputs: {
		classification_predictions: {
			inference_id: string
			predictions: {
				inference_id: string
				time: number
				image: {
					width: number
					height: number
				}
				predictions: {
					class: string
					class_id: number
					confidence: number
				}[]
				top: 'like' | 'dislike'
				confidence: number
				prediction_type: string
				parent_id: string
				root_parent_id: string
			}
		}
	}[]
	profiler_trace: unknown[]
}

export const POST: RequestHandler = async ({ request }) => {
	const { image }: Payload = await request.json()

	const modelUrl =
		'https://serverless.roboflow.com/infer/workflows/franklin-cappadora-solutions/simply-classify'
	const apiKey = env.ROBOFLOW_API_KEY

	const body = {
		api_key: apiKey,
		inputs: {
			image: image // or { type: "base64", value: image } if required
		}
	}

	const response = await fetch(`${modelUrl}?api_key=${apiKey}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})

	try {
		const result: RoboflowClassificationResponse = await response.json()
		const data: PredictResponse = {
			prediction: result.outputs[0].classification_predictions.predictions.top,
			confidence: result.outputs[0].classification_predictions.predictions.confidence
		}
		return json(data)
	} catch (err: unknown) {
		console.error('no bueno:', JSON.stringify(err))
		error(400, err instanceof Error ? err.message : 'Something went wrong.')
		return json(err)
	}
}
