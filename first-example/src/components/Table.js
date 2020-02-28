import React, { Component, Fragment, dispatch } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { fetchData } from '../action/TableAction';
import { store } from '../store/index'


class Table extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             rows:[]
        }
    }
    
    routeChange= ()=> {
      // let path = `/row`;
      // let history = useHistory();
      // history.push('/row');
      this.props.history.push('/row')
      
    }

    getData = async () => {


      const AUTH_HEADER = 'AsiMemberAuth client_id=500103135 &client_secret=57735a8dde6007de5346d02a3680915b';
      const defaultParams = '&dl=category,full_supplier,color,size,material,price,imprint_method,line_name&page=0&rpp=10';
      const API_URL = 'https://api.asicentral.com/v1/products/search.json?';
      const params = {
              method: 'GET',
              headers: {
              Authorization: AUTH_HEADER
              }
            }

// const loadData = async (queryParams, sortParams) => {
// const requestStr = queryParams + defaultParams + sortParams;
      const responseasi = await fetch(API_URL+defaultParams, params);
        
      console.log('ASI-----------------------',responseasi);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log('===========',data)
      store.dispatch(fetchData(data));

      this.setState({
        rows: store.getState()
      })
    }
    

    render() {
      const listData = this.state.rows[0]
      console.log('==',this.state.rows[0])
        return (
            <div>
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
   {listData ?
   
   listData.map( item => {
     return(
       <Fragment>
         <tr >
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
         </tr>
         {/* <Row></Row> */}
       </Fragment>
     )
   }) :  null

   }
  </tbody>
</table>
<button type="button" className="btn btn-primary" onClick = {this.getData}>Get Data</button>
<button type="button" className="btn btn-primary" onClick = {this.routeChange}>Row Data</button>
{/* <Link to = "/row"> Row</Link> */}

            </div>
        )
    }
}

export default Table
