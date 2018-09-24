import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from '../../../components/Button';

describe('Button', () => {
	describe('render', () => {
		const props = {
			id: 'test',
			onClick: jest.fn(),
			text: 'Text button',
		};
		const wrapper = mount(
			<Button
				id={props.id}
				onClick={props.onClick}
				text={props.text}
			/>,
		);

		const button = () => wrapper.find('button');
		const buttonProps = () => button().props();

		describe('with props', () => {
			it('as expected', () => {
				expect(button().length).toBe(1);
			});

			it('should render', () => {
				expect(wrapper).toMatchSnapshot();
			});

			it('should set text as expected', () => {
				expect(buttonProps().children).toEqual(props.text);

				const otherProps = {
					text: 'Other text',
				};

				wrapper.setProps(otherProps);

				expect(buttonProps().children).toEqual(otherProps.text);
			});
		});

		describe('events', () => {
			const props = {
				id: 'test',
				onClick: jest.fn(),
				text: 'Text button',
			};
			const wrapper = shallow(
				<Button
					id={props.id}
					onClick={props.onClick}
					text={props.text}
				/>,
			);

			const button = wrapper.find('button');

			it('should invoke onClick when button is clicked', () => {
				console.log('button:', button);
				button.simulate('click');
				expect(props.onClick).toBeCalled();
			});
		});
	});
});