import React from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg }from 'reactstrap';
    

    function RenderComments({comments}){
        
        if(comments==null)
        {
            return(<div></div>);
        }
        else{
            const cmnts = comments.map((comment) => {
                return (
                  <li key={comment.id}>
                      <p>{comment.author}</p>
                      <p>{comment.comment}
                      {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}</p>
                        <br />
                  </li>
                );
            });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4><br />
                <ul className="list-unstyled">
              {cmnts}</ul>
            </div>
            );
        }
    }

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className="col-5 col-md-5 m-1 col-sm-6">
                <Card>
                    <CardImg src={dish.image} width="100%" />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                
                </Card>
                
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


    const DishDetail = (props) =>{    
        if (props.dish != null) {
            return(
                
            <div className="container"> 
            <div className="row"> 
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
            </div>
            );
        }
        else{
        return (
            <div></div>
            
        );
        }
    }



export default DishDetail;