import * as React from 'react';

interface IProps{
    title:string
}

class ResultItem extends React.Component<IProps,{}>{
    public render(){
        return (
           <li>{this.props.title}</li> 
        );
    }
}
export default ResultItem;