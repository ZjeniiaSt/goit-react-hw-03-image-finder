import { Component } from 'react';
import toast from 'react-hot-toast';
import { SearchbarSt, SearchFormSt, Input } from './Searchbar.style';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    imageQuery: '',
  };

  onImageChange = event => {
    this.setState({ imageQuery: event.currentTarget.value.toLowerCase() });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.imageQuery.trim() === '') {
      toast.error(`Enter a search word`);
      return;
    }
    this.props.onSubmit(this.state.imageQuery);
    this.setState({ imageQuery: '' });
  };

  render() {
    return (
      <SearchbarSt className="searchbar">
        <SearchFormSt className="form" onSubmit={this.onSubmit}>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageQuery}
            onChange={this.onImageChange}
          />
        </SearchFormSt>
      </SearchbarSt>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func };

export default Searchbar;
