import React, { useState } from 'react'
import ItemList from './page/ItemList'
import './LuyenGoDoan.css'

let interval = null

const Huongdan = () => {
	const [ duration, setDuration ] = useState(60)
	const [ errorIndex, setErrorIndex ] = useState(0)
	const [ cpm, setCpm ] = useState(0)
	const [ wpm, setWpm ] = useState(0)
	const [ accuracy, setAccuracy ] = useState(0)
	const [ lastScore, setLastScore ] = useState('0')

	return (
		<div className="App">
			<div className="container-fluid pt-4">
				<div className="row">
					{/* Left */}
					<div className="col-sm-6 col-md-2 order-md-0 px-5">
						<ul className="list-unstyled text-center small">
							<ItemList
								name="WPM"
								data={wpm}
								style={
									wpm > 0 && wpm < 20 ? (
										{ color: 'white', backgroundColor: '#eb4841' }
									) : wpm >= 20 && wpm < 40 ? (
										{ color: 'white', backgroundColor: '#f48847' }
									) : wpm >= 40 && wpm < 60 ? (
										{ color: 'white', backgroundColor: '#ffc84a' }
									) : wpm >= 60 && wpm < 80 ? (
										{ color: 'white', backgroundColor: '#a6c34c' }
									) : wpm >= 80 ? (
										{ color: 'white', backgroundColor: '#4ec04e' }
									) : (
										{}
									)
								}
							/>
							<ItemList name="CPM" data={cpm} />
							<ItemList name="Last Score" data={lastScore} />
						</ul>
					</div>
					{/* Body */}
					<div className="col-sm-12 col-md-8 order-md-1">
						<div>
							<div className="text-center mt-4 header">
								<h1>How Fast Can You Type?</h1>
								<p className="lead">
									Start the one-minute Typing speed test and find out how fast can you type in real
									world!
								</p>

								<div className="alert alert-danger" role="alert">
									Just start typing and don't use <b>backspace</b> to correct your mistakes. Your
									mistakes will be marked in <u>Red</u> color and shown below the writing box. Good
									luck!
								</div>
							</div>

							<h6 className="mt-5">Tip!</h6>
							<ul>
								<li>
									Word Per Minute (WPM) is measured by calculating how many words you can type in 1
									minute.
								</li>
								<li>Character Per Minute (CPM) calculates how many characters are typed per minute.</li>
								<li>
									The top typing speed was achieved by{' '}
									<a
										href="https://en.wikipedia.org/wiki/Typing#Alphanumeric_entry"
										rel="noopener noreferrer"
										target="_blank"
									>
										Stella Pajunas
									</a>{' '}
									in 1946, whereas Mrs. Barbara Blackburn has averaged 150 wpm in 50 minutes and her
									top speed was 212 wpm.
								</li>
							</ul>
							<hr className="my-4" />
							<div className="mb-5">
								<h6 className="py-2">Average Typing Speeds</h6>
								<div className="d-flex text-white meter-gauge">
									<span className="col" style={{ background: '#eb4841' }}>
										0 - 20 Slow
									</span>
									<span className="col" style={{ background: '#f48847' }}>
										20 - 40 Average
									</span>
									<span className="col" style={{ background: '#ffc84a' }}>
										40 - 60 Fast
									</span>
									<span className="col" style={{ background: '#a6c34c' }}>
										60 - 80 Professional
									</span>
									<span className="col" style={{ background: '#4ec04e' }}>
										80 - 100+ Top
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-md-2 order-md-2 px-5">
						<ul className="list-unstyled text-center small">
							<ItemList name="Timers" data={duration} />
							<ItemList name="Errors" data={errorIndex} />
							<ItemList name="Acuracy" data={accuracy} symble="%" />
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Huongdan
