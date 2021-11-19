import React from "react";
import NewsItem from "./newsItem";

class News extends React.Component{
    render(){
        return(
            <div className="mt-4">
                <div className="card-deck">
                    {
                        this.props.newsPage.news.map((value)=>{
                            return <NewsItem title = {value.title} content={value.content} likes={value.serviceInfo.likes} tags={value.tags} date={value.date} id = {value.id} key={value.id}/>
                        })
                    }
                </div>
            </div>
        );
    }
}


export default News;