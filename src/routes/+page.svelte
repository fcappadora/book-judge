<script lang="ts">
	import type { PredictResponse } from './api/predict/+server'

	let selectedImage: File | null = null
	let predictionResult: string | null = null
	let loading = false

	async function handleFileUpload(event: Event) {
		const target = event.target as HTMLInputElement
		if (target.files && target.files.length > 0) {
			selectedImage = target.files[0]
			console.log(selectedImage)
		}
	}

	async function submitImage() {
		if (!selectedImage) return

		loading = true
		predictionResult = null

		const reader = new FileReader()
		reader.onload = async () => {
			const base64Image = (reader.result as string).split(',')[1]

			try {
				const res = await fetch('/api/predict', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ image: base64Image })
				})

				const data: PredictResponse = await res.json()
				predictionResult = `Result: ${data.prediction} (${data.confidence}% confidence)`
			} catch (err) {
				predictionResult = 'Error making prediction'
				console.error(err)
			} finally {
				loading = false
			}
		}
		reader.readAsDataURL(selectedImage)
	}
</script>

<h1>📚 Judge-a-Book</h1>

<input type="file" accept="image/*" on:change={handleFileUpload} />

<button on:click={submitImage} disabled={!selectedImage || loading}>
	{loading ? 'Predicting...' : 'Predict'}
</button>

{#if predictionResult}
	<p>{predictionResult}</p>
{/if}
