import React, { Component } from 'react';
import api from '../../services/api';
import { TextComponent, ImgComponent , Container , Box} from './styles';

export default class Main extends Component {
    
    state = {
        elements: []
    };

    componentDidMount(){
        this.elements();
    }

    elements = async () => {
        const response = await api.get('/elements');
        this.setState({elements: response.data});

       console.log(response.data);

    };
    
    render(){
        const {elements} =  this.state;

        const status = false;
        
        return(

            <Container>

            <Box>
           
                {elements.map(elements => {

                if(status===false){

                    const tipoo = elements.tipo;
                
                        if (tipoo ==='text') {

                            return( 
                          
                                    <TextComponent 
                                        defaultValue={elements.el}
                                        key={elements.id} 
                                        width={elements.pos.width} 
                                        height={elements.pos.height}
                                        top={elements.pos.top}
                                        left={elements.pos.left}
                                        id={elements.id}
                                        > 
                                    </TextComponent> 
                                    )
                        } else if (tipoo ==='img'){

                            return (
                                    <ImgComponent 
                                        key={elements.id} 
                                        src={elements.el}
                                        width={elements.pos.width} 
                                        height={elements.pos.height}
                                        top={elements.pos.top}
                                        left={elements.pos.left}
                                        id={elements.id}
                                        > 
                                    </ImgComponent> 
                                    )
                        }

                        }else if(status===true){
                            
                         }   
                    
                    })}

                </Box>

                {/* <Button>
                Change Position
                </Button> */}

            </Container>
        )
    }
}

