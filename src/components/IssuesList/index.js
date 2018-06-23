import React from 'react';
import PropTypes from 'prop-types';

import { ListIssues, Loading } from './styles';

const IssuesList = props => (
  <ListIssues>
    {props.loadingIssues ? (
      <Loading>
        <i className="fa fa-spinner fa-pulse" />
      </Loading>
    ) : props.getIssuesError ? (
      <h2 className="msgErro">Erro ao buscar issues para esse repositório!</h2>
    ) : (
      props.issues.map(issue => (
        <li key={issue.id}>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
          <div>
            <strong>{issue.title}</strong>
            <small>{issue.user.login}</small>
            <a href={issue.html_url} rel="noreferrer noopener" target="_blank">
              <button type="button">
                <i className="fa fa-external-link-square" /> ABRIR ISSUE
              </button>
            </a>
          </div>
        </li>
      ))
    )}
  </ListIssues>
);

IssuesList.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    html_url: PropTypes.string,
  })).isRequired,
  getIssuesError: PropTypes.bool.isRequired,
  loadingIssues: PropTypes.bool.isRequired,
};

export default IssuesList;
