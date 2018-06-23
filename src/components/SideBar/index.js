import React from 'react';
import PropTypes from 'prop-types';

import { Container, RepoList } from './styles';

const SideBar = props => (
  <Container>
    {props.children}
    <RepoList>
      {props.repositories.map(repository => (
        <li
          key={repository.id}
          onClick={e =>
            props.setCurrentRepository(e, {
              name: repository.name,
              login: repository.owner.login,
              avatar_url: repository.owner.avatar_url,
            })
          }
          role="presentation"
        >
          <img src={repository.owner.avatar_url} alt="repo-img" />
          <div className="repo-info">
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </div>
        </li>
      ))}
    </RepoList>
  </Container>
);

SideBar.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  })).isRequired,
  children: PropTypes.node.isRequired,
};

export default SideBar;
