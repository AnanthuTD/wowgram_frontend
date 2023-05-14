import { UUID } from "crypto";

export interface UserState {
	id_user: UUID;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	bio: string;
	location: string;
	gender: string;
	website: string;
	profile_img: string;
	followers: UUID[];
	following: UUID[];
	post_count: number;
}
// Define a type for the menu state
export interface MenuState {
	home: boolean;
	profile: boolean;
	create: boolean;
	search: boolean;
	explore: boolean;
	messages: boolean;
	notifications: boolean;
	reels: boolean;
}

export interface SvgProps {
	stroke?: string;
	fill?: string;
	className?: string;
	width?: number;
	height?: number;
}

export interface MenuContextInterface {
	menu: MenuState;
	HandleSetMenu: (key: keyof MenuState, value?: boolean) => void;
}

export interface PostsInterface {
	post_id: UUID;
	file: string;
	caption: string;
	location: string;
	hash_tag: string[];
	mentions: string[];
	likes: {
		username: string;
		first_name: string;
		last_name: string;
		profile_img: string;
		id_user: UUID;
	}[];
	username: string;
	time_stamp: Date;
}

export interface OtherUserProfile {
	id_user: UUID;
	username: string;
	first_name: string;
	last_name: string;
	bio: string;
	location: string;
	website: string;
	profile_img: string;
	followers: UUID[];
	following: UUID[];
	post_count: number;
}
