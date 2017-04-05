import React from 'react';
import { Tabs, Tab, TabSwitch } from 'src/index'
import { Icon } from 'src/index'
import Desc from './Desc'

class UseTab extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            curTab: '标签1',
            value: 'tab1'
        }
    }
    
    changeAction(item) {
        console.log('this is custom common click');
    }
    
    changeAction2(value, tab) {
        console.log(value);
        // alert('tabs on change');
        this.setState({
            curTab: tab.props.label,
            value: value
        })
    }
    
    clickTab(tab) {
        alert(`点击了tab中的${tab.props.label}`);
    }
    
    render() {
        return (
            <div>
                <div style={{height: '200px'}}>
                    <Tabs selectedIndex={ 0 }
                          className='test'>
                        <Tab label="标签1"
                             onClick={ this.clickTab.bind(this) }>
                            <div>this is tab1 content</div>
                        </Tab>
                        <Tab label="标签2">
                            <div>this is tab2 content</div>
                        </Tab>
                        <Tab label="标签3">
                            <div>this is tab3 content</div>
                        </Tab>
                    </Tabs>
                </div>
                
                <div style={{marginTop: '20px', height: '200px'}}>
                    <Tabs changeAction={this.changeAction2.bind(this)}
                          value={ this.state.value }>
                        <Tab label="标签1" value="tab1"/>
                        <Tab label="标签2" value="tab2" onClick={ this.clickTab }/>
                        <Tab label="标签3" value="tab3"/>
                        <Tab label="标签4" value="tab4"/>
                        <Tab label="标签5" value="tab5"/>
                        <Tab label="标签6" value="tab6"/>
                        <Tab label="标签7" value="tab7"/>
                    </Tabs>
                    <div className="custom-cont">
                        { this.state.curTab }
                    </div>
                </div>
                
                <Desc/>
                
            </div>
        )
    }
}

export default UseTab