import "./apiDocs.css";

const API_Docs = () => {
    return (
        <div className="api-docs-container">
            <h1>API Documentation</h1>
            <p>Use the endpoints below to integrate with Ayanfe Web Gen.</p>

            <h3>Authentication</h3>
            <code>POST /api/auth/login</code> - Log in a user  
            <code>POST /api/auth/register</code> - Register a new user  

            <h3>API Keys</h3>
            <code>GET /api/key</code> - Retrieve user’s API key  
            <code>POST /api/key/generate</code> - Generate a new API key  
        </div>
    );
};

export default API_Docs
