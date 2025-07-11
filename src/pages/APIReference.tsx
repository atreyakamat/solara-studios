import React from 'react';

const APIReference: React.FC = () => {
  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/v1/ai/analyze",
      description: "Analyze text content using AI",
      parameters: [
        { name: "text", type: "string", required: true, description: "Text content to analyze" },
        { name: "model", type: "string", required: false, description: "AI model to use (default: gpt-4)" },
        { name: "options", type: "object", required: false, description: "Additional analysis options" }
      ],
      response: {
        success: { sentiment: "positive", confidence: 0.95, entities: [] },
        error: { message: "Invalid input", code: 400 }
      }
    },
    {
      method: "GET",
      path: "/api/v1/automation/workflows",
      description: "Get list of automation workflows",
      parameters: [
        { name: "status", type: "string", required: false, description: "Filter by workflow status" },
        { name: "limit", type: "number", required: false, description: "Number of results to return" }
      ],
      response: {
        success: { workflows: [], total: 0 },
        error: { message: "Unauthorized", code: 401 }
      }
    },
    {
      method: "POST",
      path: "/api/v1/automation/trigger",
      description: "Trigger an automation workflow",
      parameters: [
        { name: "workflow_id", type: "string", required: true, description: "ID of the workflow to trigger" },
        { name: "data", type: "object", required: false, description: "Input data for the workflow" }
      ],
      response: {
        success: { execution_id: "exec_123", status: "started" },
        error: { message: "Workflow not found", code: 404 }
      }
    },
    {
      method: "GET",
      path: "/api/v1/ml/models",
      description: "Get available machine learning models",
      parameters: [
        { name: "category", type: "string", required: false, description: "Filter by model category" },
        { name: "version", type: "string", required: false, description: "Filter by model version" }
      ],
      response: {
        success: { models: [], total: 0 },
        error: { message: "Service unavailable", code: 503 }
      }
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Text Analysis",
      code: `const response = await fetch('/api/v1/ai/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    text: 'This product is amazing!',
    model: 'gpt-4'
  })
});

const result = await response.json();
console.log(result.sentiment); // 'positive'`
    },
    {
      language: "Python",
      title: "Workflow Trigger",
      code: `import requests

response = requests.post(
    'https://api.solara-studios.com/api/v1/automation/trigger',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'workflow_id': 'wf_123',
        'data': {'customer_id': 'cust_456'}
    }
)

result = response.json()
print(f"Execution ID: {result['execution_id']}")`
    },
    {
      language: "cURL",
      title: "Get Models",
      code: `curl -X GET "https://api.solara-studios.com/api/v1/ml/models" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"category": "nlp"}'`
    }
  ];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            API Reference
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            Complete API documentation for integrating Solara Studios AI and automation solutions into your applications.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">1. Get API Key</h3>
                <p className="text-[#a89db8] text-sm">Sign up and generate your API key from the dashboard.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">2. Make Request</h3>
                <p className="text-[#a89db8] text-sm">Include your API key in the Authorization header.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">3. Handle Response</h3>
                <p className="text-[#a89db8] text-sm">Process the JSON response and handle errors appropriately.</p>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-600/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-[#6211d4] font-mono">{endpoint.path}</code>
                </div>
                
                <p className="text-[#a89db8] mb-6">{endpoint.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3">Parameters</h4>
                    <div className="space-y-2">
                      {endpoint.parameters.map((param, paramIndex) => (
                        <div key={paramIndex} className="flex items-start gap-3">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <code className="text-[#6211d4] font-mono text-sm">{param.name}</code>
                            <span className="text-xs text-[#a89db8]">({param.type})</span>
                            {param.required && <span className="text-red-400 text-xs">*</span>}
                          </div>
                          <p className="text-[#a89db8] text-sm">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3">Response</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-green-400 text-sm font-medium">Success (200)</span>
                        <pre className="bg-[#2d2938] rounded p-3 mt-1 text-xs overflow-x-auto">
                          {JSON.stringify(endpoint.response.success, null, 2)}
                        </pre>
                      </div>
                      <div>
                        <span className="text-red-400 text-sm font-medium">Error</span>
                        <pre className="bg-[#2d2938] rounded p-3 mt-1 text-xs overflow-x-auto">
                          {JSON.stringify(endpoint.response.error, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Code Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#6211d4] font-medium">{example.language}</span>
                  <span className="text-[#a89db8] text-sm">•</span>
                  <span className="text-white font-medium">{example.title}</span>
                </div>
                <pre className="bg-[#2d2938] rounded p-4 text-xs overflow-x-auto">
                  <code className="text-[#a89db8]">{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* SDKs and Libraries */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6 text-center">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-lg font-bold mb-2">JavaScript</h3>
              <p className="text-[#a89db8] text-sm mb-4">Official Node.js and browser SDK</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Install
              </button>
            </div>
            
            <div className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6 text-center">
              <div className="text-3xl mb-4">🐍</div>
              <h3 className="text-lg font-bold mb-2">Python</h3>
              <p className="text-[#a89db8] text-sm mb-4">Python client library</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Install
              </button>
            </div>
            
            <div className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6 text-center">
              <div className="text-3xl mb-4">☕</div>
              <h3 className="text-lg font-bold mb-2">Java</h3>
              <p className="text-[#a89db8] text-sm mb-4">Java SDK for enterprise</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Install
              </button>
            </div>
            
            <div className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6 text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-bold mb-2">REST API</h3>
              <p className="text-[#a89db8] text-sm mb-4">Direct REST API access</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-lg p-8 border border-[#433c53] text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-[#a89db8] mb-6">
            Can't find what you're looking for? Our developer support team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-6 rounded transition-colors">
              Contact Support
            </button>
            <button className="bg-[#2d2938] hover:bg-[#433c53] text-white font-medium py-2 px-6 rounded transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIReference; 