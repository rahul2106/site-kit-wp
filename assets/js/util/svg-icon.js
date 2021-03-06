/**
 * SvgIcon component.
 *
 * Site Kit by Google, Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SvgIcon = ( { id, className, height, width } ) => {
	const svgPath = `${ global.googlesitekit.admin.assetsRoot }svg/svg.svg`;
	return (
		<svg
			className={ classnames(
				'svg',
				className
			) }
			height={ height }
			width={ width }
		>
			<use xlinkHref={ `${ svgPath }#${ id }` } />
		</svg>
	);
};

SvgIcon.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
};

SvgIcon.defaultProps = {
	className: '',
	height: 20,
	width: 20,
};

export default SvgIcon;
