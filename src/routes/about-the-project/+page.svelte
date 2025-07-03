<div class="pt-8">
	<h1 class="text-primary mb-4 text-xl font-bold">More on the Judge a Book concept</h1>
	<p class="mb-4">
		Judging a book by its cover isn't a good idea, but we all do it! And publishers are well aware.
	</p>
	<p class="mb-4">
		Book covers need to capture the essence of the book as well as the attention of its target
		audience. They can make or break the success of a book. Considerable time, effort, and
		investment goes into designing a cover for each new title and in many ways, the final version is
		a gamble. If publishers could tap into the natural pattern recognition of a browsing shopper,
		they might be able to optimize the chances of someone picking it up and buying it.
	</p>
	<p class="mb-4">
		While this POC is a tongue and cheek app meant for a user to receive a prediction on whether or
		not they will like a book based on books the developer likes, a more practical application could
		be for a publisher to determine the efficacy of their design for a new book before it goes to
		print. One achievable approach using Roboflow entails training a model to classify books using
		sentiment data from GoodReads, or another rating platform. The vision model could be used to
		perform a competitive analysis on similar books to turn readers’ bias to the publisher’s
		advantage.
	</p>
	<p class="mb-4">
		The model could later be expanded upon to incorporate additional metadata like genre and themes,
		specific sales performance metrics, reader demographics, etc., in order to further guide the
		design team on capturing both the essence of the book as well as the attention of its target
		audience.
	</p>

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

	<img src="/logo.png" aria-label="logo" alt="logo" />
</div>
