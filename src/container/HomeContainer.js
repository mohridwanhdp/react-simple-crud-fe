import React, { Component } from 'react'
import { Container} from "reactstrap";
import TableComponent from '../components/TableComponent';
import { connect } from "react-redux";
import { getUsersList } from '../actions/userAction';

class HomeContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getUsersList());
    }
    render() {

        return (
            <div>
                <Container>
                    <TableComponent users={this.props.users}/>
                        
                </Container>
            </div>
        )
    }
}

export default connect()(HomeContainer);
