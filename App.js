import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Container, Grid, Segment, Header } from 'semantic-ui-react';

class App extends Component {

  state = {
    data: ''
  }

  componentWillMount() {
    const requetOption = {
      headers: {
        'X-Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDY4NDBAZy1hYmxlLmNvbSIsInNjb3BlcyI6WyJURU5BTlRfQURNSU4iXSwidXNlcklkIjoiYzAwNWE2YTAtMjZlYS0xMWVhLWI0MzUtMDFjMTQ4MTMyZTIwIiwiZW5hYmxlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjFkODRmYjgwLTEyNjYtMTFlYS1iNDM1LTAxYzE0ODEzMmUyMCIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTU3NzMyOTc4NywiZXhwIjoxNTc3MzM4Nzg3fQ.npihGl75_Ws7xZ8mALDrHzxxM8T0CKYwcgJ42KjP0fSnu4leXPjZ9xseDm3LMWxWu-0_CCvHjhgiTsZmR2kkvQ'
      }
    }
    axios.get('http://thingsboard.dev.nextliving.co/api/plugins/telemetry/DEVICE/51b93b70-26c8-11ea-b435-01c148132e20/values/timeseries?keys=humidity,temperature', requetOption)
    .then(response => {
      this.setState({ data: response.data });
    })
    
  }

  handleClick = (e) => {
    console.log(this.state.data)
  }

  render(){
    const { data } = this.state;
  return (
    <Container>
      <Header as='h2' className="head">Header</Header>
       <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
           
              <Segment textAlign='center' color='teal'>
            
                <Header as='h3' className="topic">Humidity</Header>
                <div className='display-value'>
                {
                  data &&
                    <div className='display-value'>
                      {data.humidity.map(item => <Header as='h1' className="value">{item.value}</Header>)}
                    </div>
                }
                </div>
                <Header className="temperature">°C</Header>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment textAlign='center' color='teal'>
                <Header as='h3' className="topic">Temperature</Header>
                <div className='display-value'>
                {
                  data &&
                    <div className='display-value'>
                      {data.temperature.map(item => <Header as='h1' className="value">{item.value}</Header>)}
                    </div>
                }
                </div>
                <Header className="temperature">     °C</Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </Container>
  );
}
}

export default App;
