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

	<h1 class="text-primary mb-4 text-xl font-bold">More on the Judge a Book concept</h1>
	<p class="mb-4">
		While judging a book by its cover isn't a good idea, we all do it! And publishers are well
		aware. Considerable time, effort, and investment goes into designing a cover for each new title.
		Sometimes this design can make or break the success of a book.
	</p>
	<p class="mb-4">
		While the POC app is a tongue and cheek app meant for a user to receive a prediction on whether
		or not they will like a book based on books they’ve previously read, a more practical
		application could be for a publisher to determine the efficacy of their design for new books. If
		a model were to be trained using sentiment data from GoodReads, or any other rating service, a
		vision model could be used to gauge how best to design covers for their title in production.
	</p>
	<p class="mb-4">
		The model could be expanded up to incorporate additional metadata like genre and themes,
		specific sales performance metrics, reader demographics, etc., in order to further guide the
		design team on capturing both the essence of the book as well as the attention of its target
		audience.
	</p>

	<img src="/logo.png" aria-label="logo" alt="logo" />
</div>
