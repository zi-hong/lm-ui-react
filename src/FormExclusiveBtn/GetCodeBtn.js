import React from 'react';
import './GetCodeBtn.scss';

/*
 * props:
 *	...
 */

const propTypes = {

	text: React.PropTypes.string,
	countNum: React.PropTypes.number,
	onClick: React.PropTypes.func

};
const defaultProps = {

	text: '获取验证码',
	countNum: 60,
	onClick: () => {}

};

export default class GetCodeBtn extends React.Component {

	constructor (props) {

		super (props);

		this.timer = null;

		this.state = {

			canUse: true,
			second: this.props.countNum

		}

	}

	clickHandler () {
		
		this.countDown()
		this.props.onClick()

	}

	countDown () {

		const { countNum, onClick } = this.props;
		let { canUse, second } = this.state;
		//判断此时是否是可点击状态
		if (!canUse) { return }
		this.setState({ canUse: false })
		//打开定时器

		this.timer = setInterval(() => {

			if (second == 0) {

				clearInterval(this.timer);

				this.setState({

					canUse: true,
					second: countNum

				})

			} else {

				let newSecond = --second;

				this.setState({

					second: newSecond

				})

			}

		}, 1000)

	}

	componentWillUnmount () {

		clearInterval(this.timer);

	}

	render () {

		const { text, countNum, onClick, ...arg } = this.props;
		let { canUse, second } = this.state;
		let showText = canUse ? text: `${second}s后重发`;
		let clsName = canUse ? "lm-ui-get-code-btn": "lm-ui-get-code-btn-disable";

		return (

			<a 
				href="javascript:;"
				className={clsName}
				onClick={this.clickHandler.bind(this)}
				{...arg}>

				{ showText }

			</a>

		)

	}

}

GetCodeBtn.propTypes = propTypes;
GetCodeBtn.defaultProps = defaultProps;


