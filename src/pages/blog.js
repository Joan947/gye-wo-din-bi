import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
//Add in the data prop to the function definition. 
//Use the JavaScript array .map() method to iterate over the nodes array and render the filename for each post.
const BlogPage =({data})=>{
    return(
        <Layout pageTitle= "My Blog Posts">
            <ul>
            {
                data.allFile.nodes.map(node =>(
                    <li key={node.name}>{node.name}</li>
                ))
            }
            </ul>
        </Layout>
    )
}
export const query= graphql`
    query  {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
            name
        }
        }
    }
    `;
export default BlogPage;