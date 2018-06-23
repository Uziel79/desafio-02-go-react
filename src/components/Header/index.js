import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer, HeaderRepo, FilterStatus } from './styles';

const Header = ({ currentRepository, changeStatusIssues }) => (
  <HeaderContainer>
    <HeaderRepo>
      <img src={currentRepository.avatar_url} alt={currentRepository.login} />
      <div className="info">
        <strong>{currentRepository.name}</strong>
        <small>{currentRepository.login}</small>
      </div>
    </HeaderRepo>
    <FilterStatus
      id="filter-status"
      defaultValue={`${currentRepository.login}/${currentRepository.name}/issues?state=all`}
      onChange={e => changeStatusIssues(document.getElementById('filter-status').value, e)}
    >
      <option value={`${currentRepository.login}/${currentRepository.name}/issues?state=open`}>
        Abertas
      </option>
      <option value={`${currentRepository.login}/${currentRepository.name}/issues?state=closed`}>
        Fechadas
      </option>
      <option value={`${currentRepository.login}/${currentRepository.name}/issues?state=all`}>
        Todas
      </option>
    </FilterStatus>
  </HeaderContainer>
);

Header.defaultProps = {
  currentRepository: {},
};

Header.propType = {
  currentRepository: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
  }),
  changeStatusIssues: PropTypes.func.isRequired,
};

export default Header;
