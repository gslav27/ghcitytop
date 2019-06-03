import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { ghUsersListInterface } from '../utilities/types/interfaces';
import { getGhTopUsers } from '../store/ghUsers/ghUsersActionCreators';
import { getGhTopUsersList, getGhTopUsersLoadingStatus, getGhTopUsersLoadingError } from '../store/ghUsers/ghUsersSelectors';
import Spinner from '../components/ui/Spinner';
import List from '../components/List';
import UserCard from '../components/UserCard';
import ErrorMessage from '../components/ErrorMessage';



const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ dataLoading }) => (dataLoading ? '100vh' : '100%')};
`;



const TopGhUsersList = ({
  topUsersList,
  topUsersLoadingStatus,
  topUsersLoadingError,
  getGhTopUsers,
}) => {
  useEffect(() => { getGhTopUsers(); }, []);
  return (
    <Section dataLoading={topUsersLoadingStatus}>
      { topUsersLoadingStatus && <Spinner /> }
      { topUsersLoadingError && <ErrorMessage text={topUsersLoadingError} /> }
      { !(topUsersLoadingStatus || topUsersLoadingError) && (
        <List>
          {
            topUsersList.map(user => <UserCard key={user.id} {...user} />)
          }
        </List>
      )}
    </Section>
  );
};

TopGhUsersList.propTypes = {
  topUsersList:           ghUsersListInterface.isRequired,
  topUsersLoadingStatus:  PropTypes.bool.isRequired,
  topUsersLoadingError:   PropTypes.string,
  getGhTopUsers:          PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  topUsersList:           getGhTopUsersList(state),
  topUsersLoadingStatus:  getGhTopUsersLoadingStatus(state),
  topUsersLoadingError:   getGhTopUsersLoadingError(state),
});

const mapDispatchToProps = ({ getGhTopUsers });

export default connect(mapStateToProps, mapDispatchToProps)(TopGhUsersList);
