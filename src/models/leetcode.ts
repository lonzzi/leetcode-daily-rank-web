interface UserCalendar {
	UserSlug: string
	Streak: number // 连续提交
	TotalActiveDays: number // 总活跃天数
	SubmissionCalendar: string // 提交日历
	ActiveYears: Array<number>
	RecentStreak: number
}

interface RecentACSubmission {
	RecentACSubmission: {
		UserSlug: string
		SubmissionID: number
		SubmitTime: number
		QuestionFrontendID: string
	}
	Question: {
		Title: string
		TranslatedTitle: string
		TitleSlug: string
		QuestionFrontendID: string
	}
}

export interface UserModel {
	UserSlug: string
	RealName: string
	AboutMe: string
	UserAvatar: string
	Gender: string
	Websites: Array<string>
	SkillTags: Array<string>
	IPRegion: string
	Location: string
	UseDefaultAvatar: boolean
	TodaySubmissions: number
	UserCalendar: UserCalendar
	RecentACSubmission: RecentACSubmission
}
