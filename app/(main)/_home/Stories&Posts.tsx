"use client";
import { useEffect, useState } from "react";
import Post from "./post/post";
import Stories from "./stories/stories";
import React from "react";
import { PostsInterface } from "@/utils/Interfaces";

function StoriesPosts() {
	const [posts, setPosts] = useState<PostsInterface[] | undefined>(undefined);

	useEffect(() => {
		async function fetchData() {
			const Response = await fetch("/api/post/allPost");
			const Data = await Response.json();
			setPosts(Data.posts);
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="w-full lg:w-5/6 xl:11/12" style={{ maxWidth: "685px"}}>
				{/* stories */}
				<div className="" style={{ height: "fit-content" }}>
					<Stories />
				</div>
				{posts?.map((post) => (
					<Post post={post} key={post.id}/>
				))}
			</div>
		</>
	);
}

export default StoriesPosts;
