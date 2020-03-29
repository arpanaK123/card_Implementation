import React, {Component} from 'react';
// import Card from './cardui';
import Card from './multicardui';
import img1 from '../assets/r.jpg';
import img2 from '../assets/apple.jpg';
import img3 from '../assets/beach.jpg';


class Cards extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={ };
    // }
    render(){
        return(
            <div className="container-fluid d-flex justify-contenct-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Rose" details=" A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, 
                        climbing, or trailing, with stems that are often armed with sharp prickles. " />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Apple" details="An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. ... There are more than 7,500 known cultivars of apples,
                         resulting in a range of desired characteristics." />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Beach" details="A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles. The particles can also be biological in origin,
                         such as mollusc shells or coralline algae. Good for vacations"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;