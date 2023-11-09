import LeetCode from '../../assets/leetcode.svg'
import GitHub from '../../assets/github.svg'

function Header() {
	return (
		<header className="h-16 flex justify-between">
			<div className="icon flex justify-center items-center m-2">
				<a href="#">
					<img
						src={LeetCode}
						role="presentation"
						alt="力扣（LeetCode）"
						className="h-6 mr-4 inline-block text-slate-500"
					/>
				</a>
			</div>
			<div className="stack flex justify-center items-center m-2">
				<a href="https://github.com/lonzzi/leetcode-daily-rank" target="_blank">
					<img
						src={GitHub}
						role="presentation"
						alt="GitHub"
						className="h-6 mr-4 inline-block text-slate-500"
					/>
				</a>
			</div>
		</header>
	)
}

export default Header
