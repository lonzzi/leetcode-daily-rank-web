import { UserModel } from '../models/leetcode'
import { get } from '../request/axios'

export const getUsersByRank = () => {
	return get<UserModel[]>('/user/rank')
}
