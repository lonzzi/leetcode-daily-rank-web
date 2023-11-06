import LeetCode from '../../assets/leetcode.svg'

function Header() {
	return (
		<header className="h-16 border-b-2 border-slate-200 flex justify-between">
			<div className="icon flex justify-center items-center m-2">
				<a href="#">
					<img
						src={LeetCode}
						role="presentation"
						alt="力扣（LeetCode）"
						className="h-9 transform mr-4 inline-block text-slate-500"
					/>
				</a>
			</div>
			<div className="stack flex justify-center items-center m-2">
				ctn-group
			</div>
		</header>
	)
}

export default Header
