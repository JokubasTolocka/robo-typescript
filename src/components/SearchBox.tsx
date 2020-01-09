import * as React from 'react';

//search change doesnt return anything, just updates the state
interface ISearchBoxProps{
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void 
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div className='pa2'> 
      <label className='label' htmlFor='robot-search'>Search</label>
      <input
        id='robot-search'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;