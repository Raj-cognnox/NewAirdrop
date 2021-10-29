import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

import "../App.css"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            users: null
        }
        console.log("props", this.props)
        this.resetApp = this.resetApp.bind(this)
    }
    componentDidMount() {
        // fetch('https://9161be863bbe.ngrok.io/total').then((resp) => {
        //     resp.json().then((result) => {
        //         console.log(result)
        //         // console.log(result.differntial)
        //         this.setState({ data: result })
        //     })
        // })
    }

    async resetApp() {
        const { web3 } = this.props;
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
            await web3.currentProvider.close();
        }
    }
    render() {
        let { connected, address, chainId } = this.props
        return <>

            <div id="layoutSidenav">

                <Sidebar />
                <div id="layoutSidenav_content">
                    <div id="page-content-wrapper">
                        <div className="container-fluid px-4">
                            <div className="row mt-3 mb-4">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6"> <h5>Dashboard </h5></div>
                                        <div className="col-6 text-end">

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Your Wallet address (User Id)

                                                <br />
                                                <small>{this.props.address}</small>
                                            </div>
                                           
                                        </div>
                                    </div>


                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Your wallet balance

                                                <br />
                                                <br />
                                                <small>$ 0</small>
                                            </div>
                                           
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">BNB balance
                                            <br />
                                                <br />
                                                <small>$ 0</small>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Your Packages

                                            <br />
                                                <br />
                                                <small>$ 0</small>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Business value

                                            <br />
                                                <br />
                                                <small>$ 0</small>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Joing Date

                                            <br />
                                                <br />
                                                <small>--/--/----</small>
                                            </div>
                                            
                                        </div>
                                    </div>
                                 </div>
                                <div className="row">
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Level Income
                                                <br />
                                                <h5></h5>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Matrix Income
                                                <br />
                                                <h5></h5>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">ROI Income
                                                <br />
                                                <h5></h5>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Leadership Bonus 
                                                <br />
                                                <h5></h5>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Executive Bonus ( Platinum Pool)
                                                <br />
                                                <h5></h5>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-md-6">
                                        <div className="card bg-c-yellow text-white mb-4">
                                            <div className="card-body">Executive Bonus ( Crown Pool)

                                                <br />
                                                <h5></h5>
                                            </div>
                                            <div className="card-footer d-flex align-items-center justify-content-between">
                                                <a className="small text-white stretched-link" href="#">0</a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                


                                {/* <div className="card mb-4 table-responsive">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1"></i>
                                        DataTable
                                    </div>
                                    <div className="card-body">
                                        <div class="table-responsive">
                                            <table class="table align-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Tiger Nixon</td>
                                                        <td>System Architect</td>
                                                        <td>Edinburgh</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                    </tr>
                                                    

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    }

}

export default Dashboard;

