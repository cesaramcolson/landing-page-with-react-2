import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

//create your first component

const cards = [
	{
		title: "Tiger",
		description: "A Tiger",
		image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
	},
	{
		title: "Paris",
		description: "Eiffel Tower",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94u0EyhIYQ35WVzV0LSlxZ0Ozv9tMqfzewA&s"
	},
	{
		title: "Landscape",
		description: "Lake and mountains",
		image: "https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
	},
	{
		title: "Big Tree",
		description: "A tree in pink sky",
		image: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"
	}
]

const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card 
                                title={item.title} 
                                description={item.description} 
                                image={item.image} 
                            />
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
