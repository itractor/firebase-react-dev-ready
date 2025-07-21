import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { apiClient } from '../services/apiClient';

const Dashboard: React.FC = () => {
  const [error, setError] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const testApiCall = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await apiClient.get('/protected-endpoint');
      setApiResponse(JSON.stringify(response, null, 2));
    } catch (error: any) {
      setError('API call failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      
      <div className="user-info">
        <p>Welcome, {currentUser?.email}!</p>
        <p>User ID: {currentUser?.uid}</p>
      </div>

      <div className="api-test">
        <h3>Test Authorized API Call</h3>
        <button onClick={testApiCall} disabled={loading} className="api-button">
          {loading ? 'Making API Call...' : 'Test API Call'}
        </button>
        
        {error && <div className="error">{error}</div>}
        {apiResponse && (
          <div className="api-response">
            <h4>API Response:</h4>
            <pre>{apiResponse}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;