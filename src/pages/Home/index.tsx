import Table from '@mui/joy/Table'
import Sheet from '@mui/joy/Sheet'

function Home() {
	return (
		<div className="">
			<header
				className="flex justify-center w-screen h-96 pb-[100px] text-white text-center"
				style={{
					backgroundImage: `linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)`,
				}}>
				<h1 className="text-4xl font-thin mt-10">
					<img
						src="https://static.leetcode-cn.com/cn-assets/webpack_bundles/images/LCCN_name_black.409f3d3a2.svg"
						role="presentation"
						alt="力扣（LeetCode）"
						className="h-9 transform -translate-y-1.5 mr-4 inline-block text-slate-500"
					/>
					每日排行榜
				</h1>
			</header>
			<main className="flex justify-center">
				<div className="table-wrapper w-[768px] rounded-lg overflow-hidden shadow-lg mt-[-160px] bg-white min-h-[400px]">
					<Sheet>
						<Table variant="plain">
							<thead>
								<tr>
									<th style={{ width: '40%' }}>Column 1</th>
									<th style={{ width: '64px' }}>Column 2</th>
								</tr>
							</thead>
						</Table>
					</Sheet>
				</div>
			</main>
		</div>
	)
}

export default Home
