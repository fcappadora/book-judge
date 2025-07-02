<script lang="ts">
	import type { PredictResponse } from '../../routes/api/predict/+server'

	type Props = {
		previewUrl: string | null
		results: PredictResponse | null
	}

	let { previewUrl, results }: Props = $props()

	let message = $derived.by(() => {
		if (results?.prediction == 'like') {
			if (results.confidence > 0.699) {
				return 'OMG you will love this book!'
			} else {
				return 'You will probably like this book.'
			}
		}
		if (results?.prediction == 'dislike') {
			if (results.confidence > 0.699) {
				return 'You will literally hate this book...'
			} else {
				return "You probably won't like this book :/"
			}
		}
	})
</script>

<div class="border-secondary flex gap-4 rounded-3xl border p-6">
	<img class="w-40" src={previewUrl} alt="book cover" />
	<div class="flex flex-col justify-center">
		<p class="text-primary text-center text-2xl">
			{message}
		</p>
	</div>
</div>
