import React, { useRef, useState, useEffect } from 'react'

const CommentsForm = () => {
	const [error, setError] = useState(false)
	const [localStorage, setLocalStorage] = useState(null)
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)

	const commentEl = useRef()
	const nameEl = useRef()
	const emailEl = useRef()
	const storeDataEl = useRef()

	const handleCommentSubmit = () => {}

	return (
		<div className='bg-white shadow-lg rounded-lg p-8 m-12 mb-8'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>Comments Form</h3>
			<div className='grid grid-cols-1 gap-4 mb-4'>
				<textarea
					ref={commentEl}
					className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder='Comment'
					name='comment'
				/>
			</div>
			<div className='grid grid-cols-2 gap-4 mb-4'>
				<input
					type='text'
					ref={nameEl}
					className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder='Name'
					name='name'
				/>
				<input
					type='email'
					ref={emailEl}
					className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
					placeholder='Email'
					name='email'
				/>

				{error && <p className='text-xs text-red-500'>All fields are required.</p>}
				<div className='mt-8'>
					<button
						type='button'
						onClick={handleCommentSubmit}
						className='transition duration-500 ease hover:bg-indigo-900 text-white inline-block bg-pink-600 text-lg rounded-full px-8 py-3'>
						Add Comment
					</button>
					{showSuccessMessage && (
						<span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>
					)}
				</div>
			</div>
		</div>
	)
}

export default CommentsForm
