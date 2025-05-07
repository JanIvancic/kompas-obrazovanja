const API_URL = 'http://localhost:5201/api';

export const getSchools = async () => {
  try {
    const response = await fetch(`${API_URL}/schools`);
    if (!response.ok) {
      throw new Error('Failed to fetch schools');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching schools:', error);
    throw error;
  }
};