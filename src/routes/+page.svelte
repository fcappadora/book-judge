<script lang="ts">
	import Results from '$lib/components/Results.svelte'
	import type { PredictResponse } from './api/predict/+server'

	let selectedImage: File | null = $state(null)
	let results: PredictResponse | null = $state(null)
	let errorMessage: string | null = $state(null)
	let previewUrl: string | null = $state(null)
	let loading = $state(false)

	async function handleFileUpload(event: Event) {
		selectedImage = null
		results = null
		previewUrl = null

		const target = event.target as HTMLInputElement
		if (target.files && target.files.length > 0) {
			selectedImage = target.files[0]

			// Convert to Base64 for preview
			const reader = new FileReader()
			reader.onload = () => {
				previewUrl = reader.result as string
			}
			reader.readAsDataURL(selectedImage)
		}
	}

	async function submitImage() {
		if (!selectedImage) return

		loading = true

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
				results = data
				selectedImage = null
			} catch (err) {
				errorMessage = 'Error making prediction'
				console.error(err)
			} finally {
				loading = false
			}
		}
		reader.readAsDataURL(selectedImage)
	}
</script>

<img src="/logo.png" aria-label="logo" alt="logo" />

<div class="flex flex-col items-center gap-8">
	<h2 class="text-primary text-xl font-bold">1. Upload a picture of a book cover</h2>
	<input
		type="file"
		class="file-input file-input-lg"
		accept="image/*"
		onchange={handleFileUpload}
	/>

	<h2 class="text-primary text-xl font-bold">2. We'll tell you if you will like it</h2>
	<button class="btn btn-secondary" onclick={submitImage} disabled={!selectedImage || loading}>
		{#if loading}
			<span class="loading loading-spinner"></span> Thinking...
		{:else}
			<span> Let's go! </span>
		{/if}
	</button>
	{#if errorMessage}
		<p class="text-error">Error: {errorMessage}</p>
	{/if}

	<h2 class="text-primary text-xl font-bold">3. Check out your results</h2>

	{#if results}
		<Results {previewUrl} {results} />
	{:else}
		<div class="border-secondary w-full rounded-3xl border p-6">
			<div class="skeleton h-80 w-full"></div>
		</div>
	{/if}
</div>
