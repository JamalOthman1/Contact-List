import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      if (selectedContactId) {
        try {
          const response = await fetch(`https://fullstackacademy.slack.com/archives/C06C763SV37/p1708542677189699/${selectedContactId}`);
          const data = await response.json();
          setContact(data);
          console.log(data); // For debugging purposes
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          {/* Render your contact details here using the contact state */}
        </div>
      ) : (
        <p>Select a contact to view their details.</p>
      )}
      <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
    </div>
  );
}

export default SelectedContact;
