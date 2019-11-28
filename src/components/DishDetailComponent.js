import React,{Component} from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg }from 'reactstrap';

class DishDetail extends Component{
    

    renderComments(comments){
        if(comments==null)
        {
            return(<div></div>);
        }
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

    renderDish(dish){
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

    render(){
        
        const dish=this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return (
            <div className="container">
            <div className="row">    
                {dishItem}
                {commentItem}
                </div>
            </div>
        )
    }
}


export default DishDetail;