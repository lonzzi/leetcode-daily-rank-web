import Table from '@mui/joy/Table'
import Sheet from '@mui/joy/Sheet'
import Avatar from '@mui/joy/Avatar'
import { useEffect, useState } from 'react'
import { getUsersByRank } from '../../api/leetcode-api'
import { UserModel } from '../../models/leetcode'
import { ResponseBody } from '../../request/axios'
import { Suspense } from 'react'

function TableRank({ user, rank }: { user?: UserModel; rank?: number }) {
	return (
		<tr className="[&>td]:overflow-hidden [&>td]:whitespace-nowrap [&>td]:text-ellipsis">
			<td>{rank ? rank + 1 : ''}</td>
			<td>
				<a href={`https://leetcode.cn/u/${user?.UserSlug}`} target="_blank">
					<Avatar alt={user?.UserSlug} src={user?.UserAvatar} />
				</a>
			</td>
			<td>
				<a href={`https://leetcode.cn/u/${user?.UserSlug}`} target="_blank">
					{user?.UserSlug}{' '}
				</a>
			</td>
			<td>
				<a
					href={`https://leetcode.cn/problems/${user?.RecentACSubmission.Question.TitleSlug}/description`}
					target="_blank">
					{user?.RecentACSubmission.Question.TranslatedTitle}
				</a>
			</td>
			<td>{user?.TodaySubmissions}</td>
		</tr>
	)
}

function TopCoder({
	className,
	user,
	rank,
}: {
	className?: string
	user?: UserModel
	rank?: number
}) {
	const rankStyle = [
		'bg-gradient-to-b from-[#feea88] to-[#d7a807]',
		'bg-gradient-to-b from-[#fff] to-[#ababab]',
		'bg-gradient-to-b from-[#facfa3] to-[#d77c44]',
	]

	return (
		<div
			className={`absolute flex flex-col justify-center items-center w-24 ${className}`}>
			<div
				className={`avatar-wrapper w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white flex justify-center items-center rounded-full ${
					rank ? rankStyle[rank - 1] : ''
				}`}>
				<a href={`https://leetcode.cn/u/${user?.UserSlug}`} target="_blank">
					<Avatar
						className="!w-[74px] !h-[74px] md:!w-[90px] md:!h-[90px]"
						alt={user?.UserSlug}
						src={user?.UserAvatar}
					/>
				</a>
			</div>
			<div className="flex flex-col justify-center items-center">
				<span className="text-lg font-bold">{user?.RealName}</span>
				{user?.TodaySubmissions ? (
					<span className="text-sm">今日提交数：{user?.TodaySubmissions}</span>
				) : (
					<span className="text-sm">-</span>
				)}
			</div>
		</div>
	)
}

function Home() {
	const [data, setData] = useState<ResponseBody<UserModel[]>>()
	useEffect(() => {
		getUsersByRank()
			.then((res) => {
				setData(res)
			})
			.catch((error) => {
				console.error('Error fetching data:', error)
			})
	}, [])

	return (
		<div>
			<header
				className="flex flex-col items-center h-[480px] pb-[100px] text-white text-center"
				style={{
					backgroundImage: `linear-gradient(-150deg, #222222 15%, #373737 70%, #3c4859 94%)`,
				}}>
				<div className="title">
					<h1 className="text-4xl font-thin mt-10">
						<img
							src="https://static.leetcode-cn.com/cn-assets/webpack_bundles/images/LCCN_name_black.409f3d3a2.svg"
							role="presentation"
							alt="力扣（LeetCode）"
							className="h-9 translate-y-[-4px] mr-4 inline-block"
						/>
						<span>每日排行榜</span>
						<p className="text-base">(数据有 10 分钟左右的延迟)</p>
					</h1>
				</div>
				<div className="top w-4/5 md:w-[560px] my-8 mx-4 relative h-[220px]">
					<TopCoder
						className="left-1/2 translate-x-[-50%]"
						user={data?.data?.[0]}
						rank={1}
					/>
					<TopCoder
						className="bottom-0 left-0"
						user={data?.data?.[1]}
						rank={2}
					/>
					<TopCoder
						className="bottom-0 right-0"
						user={data?.data?.[2]}
						rank={3}
					/>
				</div>
			</header>
			<main className="flex justify-center mt-[-100px]">
				<Suspense fallback={<div>Loading...</div>}>
					<div className="table-wrapper md:w-[768px] rounded-lg overflow-hidden shadow-lg mx-4 bg-white min-h-[400px] mb-16">
						<Sheet className="overflow-auto">
							<Table variant="plain">
								<thead>
									<tr>
										<th className="w-12">排名</th>
										<th className="w-16">头像</th>
										<th className="w-40">昵称</th>
										<th className="w-[280px]">最近通过</th>
										<th className="w-24">今日提交数</th>
									</tr>
								</thead>
								<tbody className="">
									{data?.data?.map((user, index) => {
										if (index > 2) {
											return (
												<TableRank
													user={user}
													rank={index}
													key={user.UserSlug}
												/>
											)
										}
									})}
								</tbody>
							</Table>
						</Sheet>
					</div>
				</Suspense>
			</main>
		</div>
	)
}

export default Home
