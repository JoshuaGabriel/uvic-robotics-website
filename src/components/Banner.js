import react from 'react';

export default class Banner extends react.Component {
    render() {
  
      return (
        <div className="w-full h-96px overflow-hidden">
             <img src={this.props.imageUrl}/>
        </div>
      );
    }
}


