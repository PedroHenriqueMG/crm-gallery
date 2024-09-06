import cropped from './assets/cropped.png'
import nature from './assets/nature.png'

export default function Root() {
	return (
		<section>
			<div>
				<img src={cropped} alt='cropped' />
				<img src={nature} alt='nature' />
				<img src={cropped} alt='cropped' />
			</div>
			<div>
				<img src={nature} alt='nature' />
				<img src={cropped} alt='cropped' />
				<img src={nature} alt='nature' />
			</div>
			<div>
				<img src={cropped} alt='cropped' />
				<img src={nature} alt='nature' />
				<img src={cropped} alt='cropped' />
			</div>
		</section>
	)
}
