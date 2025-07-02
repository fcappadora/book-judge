<div class="pt-8">
	<h1 class="text-primary mb-4 text-xl font-bold">About this project</h1>
	<p class="mb-4">
		This project demonstrates the power and ease of implementation of computer vision using
		Roboflow.
	</p>
	<p class="mb-4">
		This app is powered by a Roboflow workflow that accepts images as input. For this POC, images
		are expected to contain a book cover. The classification model utilizes the ViT Classification
		Model to analyze the input image and classify it as "like" or "dislike". After processing the
		image, the workflow returns the classification result as structured JSON to the consumer. The
		workflow is accessible via REST API.
	</p>
	<p class="mb-4">
		The model was trained using ~60 book covers, pre categorized into likes and dislikes, provided
		by the developer. The model seeks to classify input covers based on visual similarity.
	</p>
	<p class="mb-4">
		The front-end is built on Svelte-Kit using TailwindCSS and DaisyUI. It is hosted on Netlify.
	</p>
</div>
