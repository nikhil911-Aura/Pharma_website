/* ────────────────────────────────────────────
   FULL-PAGE HERO DASHBOARD MOCKUPS
   CSS-only replicas of the reference site's product screenshots.
   Used as the large centered dashboard below each product hero.
   ──────────────────────────────────────────── */

/* ─── AI INVESTIGATOR ─── */
export function AIInvestigatorHeroDashboard() {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400 text-[11px]">
          <span>Apps ▾</span>
          <span className="text-gray-300">Dashboard</span>
          <span className="text-gray-300">›</span>
          <span className="text-gray-300">All Sessions</span>
          <span className="text-gray-300">›</span>
          <span className="text-white">Creating CAPA trend Report for Pharma Training</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-[11px]">Self Guide</span>
          <span>🔔</span>
          <span>⚙️</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📊", "📁", "⏱", "📋", "📉", "💡", "👥", "⚙️"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 bg-white p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-gray-800">Creating CAPA Report for Pharma Training</span>
            <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-500">Artefacts</span>
            <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-500">Tasks</span>
            <span className="text-[10px] px-2 py-0.5 bg-blue-50 rounded text-blue-600 font-medium">5 Agents</span>
          </div>

          {/* Chart area */}
          <div className="border border-gray-100 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-gray-600">📊</span>
              <span className="text-xs font-semibold text-gray-700">Tablet Weight Variation Trend Analysis Chart</span>
              <span className="text-[9px] text-gray-400 bg-gray-50 px-1.5 rounded">Chart</span>
            </div>
            <div className="text-xs font-semibold text-gray-800 text-center mb-2">
              Metformin HCl Tablet Weight Variation Trend Analysis (Jan-Jun 2024)
            </div>
            {/* Chart mock */}
            <div className="h-36 relative bg-gradient-to-t from-red-50/30 to-transparent rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 400 120" fill="none">
                {/* Grid lines */}
                {[20, 40, 60, 80, 100].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                ))}
                {/* Green dashed baseline */}
                <line x1="0" y1="95" x2="400" y2="95" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="8 4" />
                {/* Red trend line */}
                <polyline
                  points="30,90 80,85 130,75 180,65 230,50 280,40 330,35 370,45"
                  stroke="#ef4444" strokeWidth="2.5" fill="none"
                />
                {/* Red area fill */}
                <polyline
                  points="30,90 80,85 130,75 180,65 230,50 280,40 330,35 370,45 370,95 30,95"
                  fill="rgba(239,68,68,0.08)"
                />
                {/* Data dots */}
                {[
                  [30, 90], [80, 85], [130, 75], [180, 65], [230, 50], [280, 40], [330, 35], [370, 45],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="4" fill="#ef4444" stroke="white" strokeWidth="2" />
                ))}
              </svg>
            </div>
            <div className="flex items-center justify-center gap-6 mt-2 text-[9px] text-gray-500">
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-red-500 inline-block"></span> Affected Batches per Month</span>
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-red-400 inline-block" style={{borderTop: "1px dashed"}}></span> Failure Rate (%)</span>
              <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-green-500 inline-block" style={{borderTop: "1px dashed"}}></span> Acceptable Target</span>
            </div>
          </div>

          {/* AI chat input */}
          <div className="border border-blue-200 rounded-xl p-3 bg-blue-50/30">
            <div className="text-xs text-gray-400 mb-2">Message AI Agents...</div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="text-[10px] px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium flex items-center gap-1">⚙️ Plan</span>
                <span className="text-[10px] px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium flex items-center gap-1">⚡ Act</span>
              </div>
              <div className="flex gap-2 text-gray-400">
                <span>📎</span>
                <span>▶️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CLEANING VALIDATION ─── */
export function CleaningValidationHeroDashboard() {
  const rows = [
    { id: "CA-1905-2025-012", date: "19-05-2025, 16:43:52", user: "Mary White", type: "Production", doc: "EPR-01-001", count: 4, status: "Pending Assessment", action: "Start Assessment" },
    { id: "CA-1905-2025-011", date: "19-05-2025, 15:30:00", user: "Jacob Cohen", type: "Equipment", doc: "EIQ-01-006", count: 6, status: "Pending Approval", action: "Sign Document" },
    { id: "CA-1905-2025-010", date: "19-05-2025, 14:15:45", user: "Jacob Cohen", type: "Batch", doc: "BMR-03-342", count: 7, status: "Approved", action: "Download Document" },
    { id: "CA-1905-2025-009", date: "19-05-2025, 14:00:00", user: "Sarah Smith", type: "Batch", doc: "BMR-07-349", count: 9, status: "Awaiting Signatures", action: "Continue Signing" },
    { id: "CA-1805-2025-008", date: "18-05-2025, 17:45:30", user: "John Doe", type: "Batch", doc: "BMR-04-405", count: 2, status: "Pending Approval", action: "Sign Document" },
    { id: "CA-1805-2025-007", date: "18-05-2025, 13:30:00", user: "Emily Johnson", type: "Production", doc: "EPR-06-004", count: 3, status: "Pending Approval", action: "Sign Document" },
    { id: "CA-1705-2025-006", date: "17-05-2025, 18:15:15", user: "Michael Brown", type: "Equipment", doc: "EIQ-09-012", count: 4, status: "Awaiting Signatures", action: "Continue Signing" },
    { id: "CA-1705-2025-005", date: "17-05-2025, 11:10:00", user: "Jessica Davis", type: "Production", doc: "EPR-08-004", count: 5, status: "Approved", action: "Download Document" },
  ];

  const statusColor: Record<string, string> = {
    "Pending Assessment": "text-amber-600 bg-amber-50",
    "Pending Approval": "text-red-600 bg-red-50",
    "Approved": "text-green-600 bg-green-50",
    "Awaiting Signatures": "text-blue-600 bg-blue-50",
  };

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-gray-400">🏢 Boston Plant ▾</span>
          <span className="text-gray-400">🔬 CLEEN ▾</span>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-teal-500 text-[8px] flex items-center justify-center font-bold">JW</div>
            <span className="text-gray-300">James White ▾</span>
          </div>
        </div>
      </div>

      {/* Content listing */}
      <div className="flex min-h-[350px]">
        {/* Sidebar */}
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📋", "📊", "🔬", "📁", "⚗️", "📄", "🗂"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>

        {/* Table */}
        <div className="flex-1 bg-white p-4 overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-gray-400 text-left border-b border-gray-100">
                <th className="pb-2 pr-3 font-medium">···</th>
                <th className="pb-2 pr-3 font-medium">ID</th>
                <th className="pb-2 pr-3 font-medium">DATE</th>
                <th className="pb-2 pr-3 font-medium">USER</th>
                <th className="pb-2 pr-3 font-medium">TYPE</th>
                <th className="pb-2 pr-3 font-medium">DOC</th>
                <th className="pb-2 pr-3 font-medium">#</th>
                <th className="pb-2 pr-3 font-medium">STATUS</th>
                <th className="pb-2 font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-2 pr-3">
                    <input
                      type="checkbox"
                      className={`w-3 h-3 rounded border-gray-300 ${i === 1 ? "accent-purple-600 bg-purple-600 border-purple-600" : ""} pointer-events-none cursor-default`}
                      checked={i === 1}
                      disabled
                    />
                  </td>
                  <td className="py-2 pr-3 text-blue-600 font-medium">{row.id}</td>
                  <td className="py-2 pr-3 text-gray-500">{row.date}</td>
                  <td className="py-2 pr-3 text-gray-700">{row.user}</td>
                  <td className="py-2 pr-3 text-gray-500">{row.type}</td>
                  <td className="py-2 pr-3 text-gray-500">{row.doc}</td>
                  <td className="py-2 pr-3 text-gray-500">{row.count}</td>
                  <td className="py-2 pr-3">
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${statusColor[row.status] || "text-gray-600 bg-gray-50"}`}>
                      ● {row.status}
                    </span>
                  </td>
                  <td className="py-2 text-gray-600">
                    <button className="px-2 py-1 border border-gray-200 rounded text-[9px] hover:bg-gray-50">{row.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── ENVIRONMENTAL MONITORING ─── */
export function EnvironmentalMonitoringHeroDashboard() {
  const rows = [
    { location: "Room 201-A", type: "Settle Plate", zone: "Grade A", status: "Pass", cfu: "< 1", trend: "↓" },
    { location: "Room 201-B", type: "Active Air", zone: "Grade A", status: "Pass", cfu: "3", trend: "→" },
    { location: "Room 301-A", type: "Surface", zone: "Grade B", status: "Alert", cfu: "12", trend: "↑" },
    { location: "Room 301-B", type: "Settle Plate", zone: "Grade B", status: "Pass", cfu: "< 1", trend: "↓" },
    { location: "Room 401-A", type: "Active Air", zone: "Grade C", status: "Excursion", cfu: "28", trend: "↑" },
    { location: "Corridor C1", type: "Surface", zone: "Grade C", status: "Pass", cfu: "5", trend: "→" },
    { location: "Room 501-A", type: "Personnel", zone: "Grade A", status: "Pass", cfu: "< 1", trend: "↓" },
  ];

  const statusStyle: Record<string, string> = {
    Pass: "text-green-600",
    Alert: "text-amber-600",
    Excursion: "text-red-600",
  };

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-gray-400">🏢 New York ▾</span>
          <span className="text-gray-400">⚗️ Batch Manufacturing ▾</span>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-teal-500 text-[8px] flex items-center justify-center font-bold">SC</div>
            <span className="text-gray-300">System Core ▾</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📋", "📊", "🔬", "📁", "⚗️", "📄"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>

        <div className="flex-1 bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-800">Environmental Monitoring Dashboard</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] px-2.5 py-1 rounded-full border border-blue-200 text-blue-600 font-medium">Grade A: 12</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full border border-blue-200 text-blue-600 font-medium">Grade B: 24</span>
            </div>
          </div>

          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-gray-400 text-left border-b border-gray-100">
                <th className="pb-2 pr-4 font-medium">LOCATION</th>
                <th className="pb-2 pr-4 font-medium">TYPE</th>
                <th className="pb-2 pr-4 font-medium">ZONE</th>
                <th className="pb-2 pr-4 font-medium">STATUS</th>
                <th className="pb-2 pr-4 font-medium">CFU COUNT</th>
                <th className="pb-2 pr-4 font-medium">TREND</th>
                <th className="pb-2 font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-2.5 pr-4 text-gray-700 font-medium">{row.location}</td>
                  <td className="py-2.5 pr-4 text-gray-500">{row.type}</td>
                  <td className="py-2.5 pr-4 text-gray-500">{row.zone}</td>
                  <td className={`py-2.5 pr-4 font-semibold ${statusStyle[row.status]}`}>{row.status}</td>
                  <td className="py-2.5 pr-4 text-gray-700">{row.cfu}</td>
                  <td className="py-2.5 pr-4 text-gray-500">{row.trend}</td>
                  <td className="py-2.5 text-blue-600 cursor-pointer hover:underline">View →</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary footer */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-green-700">92%</div>
              <div className="text-[10px] text-green-600">Pass Rate</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-amber-700">3</div>
              <div className="text-[10px] text-amber-600">Active Alerts</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-red-700">1</div>
              <div className="text-[10px] text-red-600">Excursions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── INSTRUMENT LOGBOOKS ─── */
export function InstrumentLogbooksHeroDashboard() {
  const instruments = [
    { name: "Autoclave AC-001", type: "Sterilization", status: "In Use", lastCal: "2025-05-01", nextCal: "2025-08-01", health: "Good" },
    { name: "HPLC System HP-003", type: "Analytical", status: "Available", lastCal: "2025-04-15", nextCal: "2025-07-15", health: "Good" },
    { name: "Balance BAL-012", type: "Weighing", status: "In Use", lastCal: "2025-04-20", nextCal: "2025-07-20", health: "Attention" },
    { name: "pH Meter PH-007", type: "Analytical", status: "Maintenance", lastCal: "2025-03-10", nextCal: "2025-06-10", health: "Critical" },
    { name: "Dissolution DS-002", type: "Testing", status: "Available", lastCal: "2025-05-05", nextCal: "2025-08-05", health: "Good" },
    { name: "Centrifuge CF-004", type: "Separation", status: "Available", lastCal: "2025-04-28", nextCal: "2025-07-28", health: "Good" },
    { name: "Incubator INC-009", type: "Microbiology", status: "In Use", lastCal: "2025-05-10", nextCal: "2025-08-10", health: "Good" },
  ];

  const statusStyle: Record<string, string> = {
    "In Use": "text-blue-600 bg-blue-50",
    "Available": "text-green-600 bg-green-50",
    "Maintenance": "text-amber-600 bg-amber-50",
  };

  const healthStyle: Record<string, string> = {
    Good: "text-green-600",
    Attention: "text-amber-600",
    Critical: "text-red-600",
  };

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-gray-400">🏢 New York ▾</span>
          <span className="text-gray-400">⚗️ Batch Manufacturing ▾</span>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-teal-500 text-[8px] flex items-center justify-center font-bold">SC</div>
            <span className="text-gray-300">System Core ▾</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📋", "📊", "🔬", "📁", "⚗️", "📄"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>

        <div className="flex-1 bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-800">Autoclave Usage and Maintenance Log</span>
            <button className="text-[10px] px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">+ Add View</button>
          </div>

          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-gray-400 text-left border-b border-gray-100">
                <th className="pb-2 pr-3 font-medium">INSTRUMENT</th>
                <th className="pb-2 pr-3 font-medium">TYPE</th>
                <th className="pb-2 pr-3 font-medium">STATUS</th>
                <th className="pb-2 pr-3 font-medium">LAST CAL.</th>
                <th className="pb-2 pr-3 font-medium">NEXT CAL.</th>
                <th className="pb-2 pr-3 font-medium">HEALTH</th>
                <th className="pb-2 font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {instruments.map((inst, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-2.5 pr-3 text-gray-700 font-medium">{inst.name}</td>
                  <td className="py-2.5 pr-3 text-gray-500">{inst.type}</td>
                  <td className="py-2.5 pr-3">
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${statusStyle[inst.status]}`}>
                      {inst.status}
                    </span>
                  </td>
                  <td className="py-2.5 pr-3 text-gray-500">{inst.lastCal}</td>
                  <td className="py-2.5 pr-3 text-gray-500">{inst.nextCal}</td>
                  <td className={`py-2.5 pr-3 font-semibold ${healthStyle[inst.health]}`}>{inst.health}</td>
                  <td className="py-2.5 text-blue-600 cursor-pointer hover:underline">View Log →</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── FEATURE-LEVEL MOCKUPS (smaller, used in alternating sections) ─── */

export function RCADashboardMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white text-[10px]">
          <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
          <span>Root Cause Analysis - 6M Method</span>
        </div>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Investigation Summary</div>
        <div className="space-y-1.5 text-[10px] text-gray-500 mb-4">
          <div><span className="font-medium text-gray-700">Product:</span> Paracetamol 500mg Tablets</div>
          <div><span className="font-medium text-gray-700">Issue:</span> Out-of-specification dissolution results</div>
          <div><span className="font-medium text-gray-700">Batch:</span> PARA500-24-078</div>
        </div>
        <div className="text-xs font-semibold text-gray-700 mb-2">6M Analysis</div>
        <div className="grid grid-cols-3 gap-2">
          {["MAN", "Machine", "Method", "Material", "Measurement", "Environment"].map((cat) => (
            <div key={cat} className="bg-gray-50 rounded-lg p-2 text-center">
              <div className="text-[10px] font-bold text-gray-700">{cat}</div>
              <div className="text-[8px] text-blue-600 mt-1">AI-Generated</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CAPAReportMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>CAPA Trend Report</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="border border-blue-100 rounded-lg p-3 mb-3 bg-blue-50/30">
          <div className="text-xs font-bold text-gray-800">TREND CAPA REPORT</div>
          <div className="text-[9px] text-gray-500 mt-0.5">METFORMIN HCL 500mg TABLE WEIGHT VARIATION</div>
          <div className="mt-2 text-[9px] text-blue-600 font-semibold">DOCUMENT CONTROL</div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] px-2 py-0.5 bg-gray-100 rounded text-gray-500">Artefacts</span>
          <span className="text-[9px] px-2 py-0.5 bg-gray-100 rounded text-gray-500">Export ▾</span>
        </div>
        <div className="border border-gray-100 rounded-lg p-3">
          <div className="text-[10px] font-semibold text-gray-700 mb-1">Trend CAPA Report - Metformin HCl</div>
          <div className="text-[8px] text-gray-400">Comprehensive trend CAPA report document for the last 30 manufacturing batches</div>
          <div className="flex gap-2 mt-2 text-[8px]">
            <span className="text-gray-400">Markdown</span>
            <span className="text-gray-400">4 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HypothesisVerificationMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Hypothesis Cross-Referencing</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Now let me create a supporting visualisation showing the trend analysis:</div>
        <div className="border border-gray-100 rounded-lg p-3 mb-3">
          <div className="text-[10px] font-semibold text-gray-700 mb-2">Tablet Weight Variation Trend Analysis Chart</div>
          <div className="h-24 bg-gradient-to-t from-red-50/30 to-transparent rounded-lg">
            <svg className="w-full h-full" viewBox="0 0 300 80" fill="none">
              <line x1="0" y1="65" x2="300" y2="65" stroke="#22c55e" strokeWidth="1" strokeDasharray="6 3" />
              <polyline points="20,60 60,55 100,48 140,42 180,35 220,30 260,33" stroke="#ef4444" strokeWidth="2" fill="none" />
              <polyline points="20,60 60,55 100,48 140,42 180,35 220,30 260,33 260,65 20,65" fill="rgba(239,68,68,0.06)" />
            </svg>
          </div>
        </div>
        <div className="border border-blue-200 rounded-xl p-2.5 bg-blue-50/30">
          <div className="text-[9px] text-gray-400">Message AI Agents...</div>
          <div className="flex gap-2 mt-1.5">
            <span className="text-[8px] px-2 py-0.5 bg-gray-100 rounded-full">Plan</span>
            <span className="text-[8px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">Act</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CleaningProtocolMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span className="text-gray-400">🏢 Boston Plant ▾</span>
        <span className="text-gray-400">🔬 CLEEN ▾</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-semibold text-gray-700">Validation Protocol for Atorvastatin Calcium Tablet</div>
          <span className="text-[9px] px-2 py-0.5 bg-green-50 text-green-600 rounded-full">Active</span>
        </div>
        <div className="text-[9px] text-gray-500 mb-3">Protocol ID: PRTCL-JAN25-2 • Version: 1</div>
        <div className="space-y-2">
          {["Protocol Details", "Objective", "Batch and Cleaning Details", "Active Residue Verification", "Visual Inspection"].map((item, i) => (
            <div key={i} className={`text-[10px] px-3 py-2 rounded-lg ${i === 3 ? "bg-blue-50 text-blue-700 font-semibold" : "bg-gray-50 text-gray-600"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <div className="text-[10px] font-semibold text-gray-700 mb-1">Active Residue Verification</div>
          <div className="text-[8px] text-gray-500">Users will be asked to record Sampling and Residue Details for Actives</div>
          <div className="text-[9px] mt-2 text-gray-700 font-medium">For Direct Contact Surfaces</div>
          <div className="text-[8px] text-gray-500 mt-0.5">Lowest SAL Limit for a Production Group on a selected Equipment</div>
        </div>
      </div>
    </div>
  );
}

export function ResidueTrendMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Residue Trend Dashboard</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Real-Time Residue Trending</div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-base font-bold text-green-700">0.8 ppm</div>
            <div className="text-[9px] text-green-600">API Residue</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-base font-bold text-blue-700">2.1 ppm</div>
            <div className="text-[9px] text-blue-600">Cleaning Agent</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <div className="text-base font-bold text-gray-700">10 ppm</div>
            <div className="text-[9px] text-gray-500">MACO Limit</div>
          </div>
        </div>
        <div className="h-20 bg-gradient-to-t from-green-50/30 to-transparent rounded-lg">
          <svg className="w-full h-full" viewBox="0 0 300 70" fill="none">
            <line x1="0" y1="15" x2="300" y2="15" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" />
            <text x="305" y="18" fill="#ef4444" fontSize="6">Limit</text>
            <polyline points="20,55 60,50 100,52 140,48 180,45 220,42 260,40" stroke="#22c55e" strokeWidth="2" fill="none" />
            <polyline points="20,55 60,50 100,52 140,48 180,45 220,42 260,40 260,65 20,65" fill="rgba(34,197,94,0.06)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function EMSmartPlanningMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Smart Sampling Planner</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Weekly Sampling Schedule</div>
        <div className="grid grid-cols-5 gap-1.5 mb-4">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
            <div key={day} className="text-center">
              <div className="text-[8px] text-gray-400 mb-1">{day}</div>
              <div className={`text-[9px] py-1 rounded ${day === "Wed" ? "bg-blue-100 text-blue-700 font-semibold" : "bg-gray-50 text-gray-600"}`}>
                {day === "Mon" ? "8" : day === "Tue" ? "12" : day === "Wed" ? "15" : day === "Thu" ? "10" : "6"} samples
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { zone: "Grade A", locations: 4, method: "Active Air + Settle Plate", bg: "bg-red-50", text: "text-red-700" },
            { zone: "Grade B", locations: 8, method: "Surface + Active Air", bg: "bg-orange-50", text: "text-orange-700" },
            { zone: "Grade C", locations: 6, method: "Settle Plate", bg: "bg-yellow-50", text: "text-yellow-700" },
          ].map((zone) => (
            <div key={zone.zone} className={`${zone.bg} rounded-lg p-2.5 flex items-center justify-between`}>
              <div>
                <span className={`text-[10px] font-bold ${zone.text}`}>{zone.zone}</span>
                <span className="text-[9px] text-gray-500 ml-2">{zone.locations} locations</span>
              </div>
              <span className="text-[8px] text-gray-500">{zone.method}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExcursionManagementMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Excursion Investigation</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] px-2 py-0.5 bg-red-50 text-red-600 rounded-full font-semibold">⚠ Excursion Detected</span>
          <span className="text-[9px] text-gray-400">Room 401-A • Active Air</span>
        </div>
        <div className="bg-red-50/50 rounded-lg p-3 mb-3">
          <div className="text-[10px] font-semibold text-gray-700 mb-1">CFU Count: 28 (Limit: 10)</div>
          <div className="text-[9px] text-gray-500">Organism: <span className="font-medium text-gray-700">Staphylococcus epidermidis</span></div>
        </div>
        <div className="text-[10px] font-semibold text-gray-700 mb-2">Investigation Workflow</div>
        <div className="space-y-1.5">
          {[
            { step: "1. Initial Assessment", status: "✓ Complete" },
            { step: "2. Root Cause Analysis", status: "In Progress" },
            { step: "3. Corrective Actions", status: "Pending" },
            { step: "4. Re-sampling", status: "Pending" },
          ].map((item) => (
            <div key={item.step} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-[10px] text-gray-700">{item.step}</span>
              <span className={`text-[9px] font-medium ${item.status.includes("Complete") ? "text-green-600" : item.status.includes("Progress") ? "text-blue-600" : "text-gray-400"}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function InstrumentCalibrationMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Calibration Management</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Upcoming Calibrations</div>
        <div className="space-y-2">
          {[
            { name: "pH Meter PH-007", due: "Overdue by 3 days", urgency: "critical" },
            { name: "Balance BAL-012", due: "Due in 5 days", urgency: "warning" },
            { name: "HPLC System HP-003", due: "Due in 30 days", urgency: "ok" },
            { name: "Autoclave AC-001", due: "Due in 45 days", urgency: "ok" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <div>
                <div className="text-[10px] font-semibold text-gray-700">{item.name}</div>
                <div className={`text-[9px] ${item.urgency === "critical" ? "text-red-600" : item.urgency === "warning" ? "text-amber-600" : "text-green-600"}`}>
                  {item.due}
                </div>
              </div>
              <button className="text-[9px] px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50">
                Schedule
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AuditTrailMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Electronic Audit Trail</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-700">Autoclave AC-001 - Usage Log</span>
          <span className="text-[9px] px-2 py-0.5 bg-green-50 text-green-600 rounded-full">21 CFR Part 11 Compliant</span>
        </div>
        <div className="space-y-2">
          {[
            { time: "10:30 AM", user: "John Doe", action: "Started sterilization cycle", sig: "e-Signed ✓" },
            { time: "11:45 AM", user: "John Doe", action: "Cycle completed - Parameters verified", sig: "e-Signed ✓" },
            { time: "11:50 AM", user: "Sarah Smith", action: "QA Review - Approved", sig: "e-Signed ✓" },
            { time: "12:00 PM", user: "System", action: "Auto-generated usage report", sig: "System ✓" },
          ].map((entry, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-2.5">
              <div className="text-[9px] text-gray-400 w-12 shrink-0">{entry.time}</div>
              <div className="flex-1">
                <div className="text-[10px] text-gray-700"><span className="font-semibold">{entry.user}</span> — {entry.action}</div>
              </div>
              <span className="text-[8px] text-green-600 font-medium shrink-0">{entry.sig}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── MANUFACTURING — BATCH EXECUTION HERO ─── */
export function BatchExecutionHeroDashboard() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-gray-400">🏢 Chicago Plant ▾</span>
          <span className="text-gray-400">⚙️ Batch Manufacturing ▾</span>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-indigo-500 text-[8px] flex items-center justify-center font-bold">RK</div>
            <span className="text-gray-300">R. Kumar ▾</span>
          </div>
        </div>
      </div>
      <div className="flex min-h-[380px]">
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📊", "📁", "📝", "🔍", "⚡", "⚙️", "👥"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>
        <div className="flex-1 bg-white p-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-gray-800">Batch Record Execution</span>
            <span className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-green-100 text-green-700">Active</span>
          </div>
          <div className="text-[10px] text-gray-500 mb-4">Batch #BX-2026-0342 • Amoxicillin 500mg • Started: Mar 25, 2026 08:00 AM</div>

          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: "Batch Progress", value: "60%", color: "text-indigo-600" },
              { label: "ETA Release", value: "Mar 28", color: "text-gray-800" },
              { label: "Materials Used", value: "4 / 7", color: "text-gray-800" },
              { label: "Interlocks", value: "All Pass", color: "text-green-600" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[9px] text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {[
              { step: "1. Weighing & Dispensing", status: "completed", time: "2h 15m", by: "J. Smith" },
              { step: "2. Granulation", status: "completed", time: "3h 42m", by: "R. Kumar" },
              { step: "3. Compression", status: "in-progress", time: "1h 20m", by: "A. Patel" },
              { step: "4. Coating", status: "pending", time: "—", by: "—" },
              { step: "5. Packaging", status: "pending", time: "—", by: "—" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50/50">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  item.status === "completed" ? "bg-green-500" : item.status === "in-progress" ? "bg-indigo-500 animate-pulse" : "bg-gray-200"
                }`}>
                  {item.status === "completed" && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  )}
                  {item.status === "in-progress" && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
                <div className="flex-1">
                  <div className={`text-[11px] font-medium ${item.status === "completed" ? "text-gray-400 line-through" : item.status === "in-progress" ? "text-indigo-600" : "text-gray-500"}`}>
                    {item.step}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 w-16">{item.time}</span>
                <span className="text-[10px] text-gray-400 w-16">{item.by}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MANUFACTURING — BATCH INTELLIGENCE HERO ─── */
export function BatchIntelligenceHeroDashboard() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-gray-400">🏢 All Plants ▾</span>
          <span className="text-gray-400">📊 OTIF Analytics ▾</span>
          <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[9px] font-bold">Live</span>
        </div>
      </div>
      <div className="flex min-h-[380px]">
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📊", "📁", "🔍", "📋", "⚡", "👥"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>
        <div className="flex-1 bg-white p-5">
          <div className="text-sm font-semibold text-gray-800 mb-4">Production Intelligence Dashboard</div>
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: "Current OTIF", value: "94.5%", trend: "+5.2%", tColor: "text-green-600", bg: "bg-green-50" },
              { label: "Average Delay", value: "1.8 days", trend: "-0.2d", tColor: "text-green-600", bg: "bg-blue-50" },
              { label: "Active Batches", value: "23", trend: "+3", tColor: "text-blue-600", bg: "bg-indigo-50" },
              { label: "At Risk", value: "4", trend: "-1", tColor: "text-amber-600", bg: "bg-amber-50" },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.bg} rounded-xl p-3 text-center`}>
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-[9px] text-gray-500">{stat.label}</div>
                <div className={`text-[9px] mt-0.5 ${stat.tColor}`}>{stat.trend} vs last month</div>
              </div>
            ))}
          </div>
          <div className="border border-gray-100 rounded-xl p-4 mb-4">
            <div className="text-xs font-semibold text-gray-700 mb-2">OTIF Trend — Last 12 Months</div>
            <div className="h-32 bg-gradient-to-t from-indigo-50/30 to-transparent rounded-lg">
              <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
                {[20, 40, 60, 80].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                ))}
                <polyline points="30,70 65,65 100,60 135,55 170,50 205,45 240,40 275,35 310,30 345,25 380,20" stroke="#6366f1" strokeWidth="2.5" fill="none" />
                <polyline points="30,70 65,65 100,60 135,55 170,50 205,45 240,40 275,35 310,30 345,25 380,20 380,90 30,90" fill="rgba(99,102,241,0.06)" />
                {[[30,70],[65,65],[100,60],[135,55],[170,50],[205,45],[240,40],[275,35],[310,30],[345,25],[380,20]].map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3.5" fill="#6366f1" stroke="white" strokeWidth="2" />
                ))}
              </svg>
            </div>
            <div className="flex justify-between mt-1.5 px-2 text-[8px] text-gray-400">
              {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-green-50 rounded-xl p-3 text-center"><div className="text-lg font-bold text-green-700">87%</div><div className="text-[9px] text-green-600">On-Time Rate</div></div>
            <div className="bg-blue-50 rounded-xl p-3 text-center"><div className="text-lg font-bold text-blue-700">96%</div><div className="text-[9px] text-blue-600">In-Full Rate</div></div>
            <div className="bg-indigo-50 rounded-xl p-3 text-center"><div className="text-lg font-bold text-indigo-700">2.1d</div><div className="text-[9px] text-indigo-600">Avg Cycle Time</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MANUFACTURING — PRODUCTION LOGBOOKS HERO ─── */
export function ProductionLogbooksHeroDashboard() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 text-white text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-[10px] font-bold">S</div>
          <span className="text-green-400 text-[8px]">●</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-gray-400">🏢 New York ▾</span>
          <span className="text-gray-400">📋 Production Logbooks ▾</span>
        </div>
      </div>
      <div className="flex min-h-[380px]">
        <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center gap-4 pt-4">
          {["📋", "📊", "🔧", "📁", "🔔", "⚙️"].map((icon, i) => (
            <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs hover:bg-gray-100 cursor-pointer">{icon}</div>
          ))}
        </div>
        <div className="flex-1 bg-white p-5">
          <div className="text-sm font-semibold text-gray-800 mb-4">Blister Pack Machine Log</div>
          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-gray-400 text-left border-b border-gray-100">
                <th className="pb-2 pr-3 font-medium">STATUS</th>
                <th className="pb-2 pr-3 font-medium">JOB ID</th>
                <th className="pb-2 pr-3 font-medium">STARTED BY</th>
                <th className="pb-2 pr-3 font-medium">START DATE</th>
                <th className="pb-2 pr-3 font-medium">EQUIPMENT</th>
                <th className="pb-2 font-medium">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {[
                { status: "Completed", id: "87543", user: "John Doe", date: "2026-03-20", equip: "BPM-001", sColor: "bg-green-50 text-green-600" },
                { status: "In Progress", id: "74785", user: "Jane Smith", date: "2026-03-22", equip: "BPM-002", sColor: "bg-blue-50 text-blue-600" },
                { status: "Completed", id: "78500", user: "Robert Brown", date: "2026-03-18", equip: "BPM-001", sColor: "bg-green-50 text-green-600" },
                { status: "Completed", id: "39665", user: "Emily Davis", date: "2026-03-15", equip: "BPM-003", sColor: "bg-green-50 text-green-600" },
                { status: "Completed", id: "41290", user: "Michael Chen", date: "2026-03-13", equip: "BPM-002", sColor: "bg-green-50 text-green-600" },
                { status: "Completed", id: "38442", user: "Sarah Wilson", date: "2026-03-10", equip: "BPM-001", sColor: "bg-green-50 text-green-600" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-2.5 pr-3"><span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${row.sColor}`}>{row.status}</span></td>
                  <td className="py-2.5 pr-3 text-indigo-600 font-medium">{row.id}</td>
                  <td className="py-2.5 pr-3 text-gray-700">{row.user}</td>
                  <td className="py-2.5 pr-3 text-gray-500">{row.date}</td>
                  <td className="py-2.5 pr-3 text-gray-500">{row.equip}</td>
                  <td className="py-2.5 text-indigo-600 cursor-pointer hover:underline">View Log →</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── MFG FEATURE MOCKUPS ─── */
export function BatchWorkflowMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Batch Workflow Designer</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Process Interlocks & Workflow Steps</div>
        <div className="space-y-2">
          {[
            { step: "Material Verification", desc: "Barcode scan confirms correct raw materials", status: "interlock" },
            { step: "Environment Check", desc: "Temperature & humidity within range", status: "interlock" },
            { step: "Operator Authentication", desc: "Biometric + e-signature verification", status: "interlock" },
            { step: "Weighing & Dispensing", desc: "Automated material dispensing with variance check", status: "step" },
            { step: "In-Process Controls", desc: "Real-time IPC data capture", status: "step" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${item.status === "interlock" ? "bg-amber-100" : "bg-indigo-100"}`}>
                <span className="text-[10px]">{item.status === "interlock" ? "🔒" : "⚡"}</span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold text-gray-700">{item.step}</div>
                <div className="text-[9px] text-gray-500">{item.desc}</div>
              </div>
              <span className={`text-[8px] px-2 py-0.5 rounded-full font-medium ${item.status === "interlock" ? "bg-amber-50 text-amber-600" : "bg-indigo-50 text-indigo-600"}`}>
                {item.status === "interlock" ? "Interlock" : "Process Step"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OTIFDashboardMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>OTIF Monitoring</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">Real-Time Batch Tracking</div>
        <div className="space-y-2">
          {[
            { batch: "BX-2026-0342", product: "Amoxicillin 500mg", progress: 85, status: "On Track", color: "text-green-600" },
            { batch: "BX-2026-0343", product: "Metformin HCl 500mg", progress: 45, status: "Delayed", color: "text-red-600" },
            { batch: "BX-2026-0344", product: "Atorvastatin 20mg", progress: 92, status: "On Track", color: "text-green-600" },
            { batch: "BX-2026-0345", product: "Paracetamol 500mg", progress: 30, status: "At Risk", color: "text-amber-600" },
          ].map((item) => (
            <div key={item.batch} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <span className="text-[10px] font-semibold text-gray-700">{item.batch}</span>
                  <span className="text-[9px] text-gray-400 ml-2">{item.product}</span>
                </div>
                <span className={`text-[9px] font-semibold ${item.color}`}>{item.status}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.status === "On Track" ? "bg-green-500" : item.status === "Delayed" ? "bg-red-500" : "bg-amber-500"}`} style={{ width: `${item.progress}%` }} />
              </div>
              <div className="text-[8px] text-gray-400 mt-1 text-right">{item.progress}% complete</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LogbookEntryMockup() {
  return (
    <div className="w-full p-5">
      <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center gap-2 text-white text-[10px]">
        <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-[8px] font-bold">S</div>
        <span>Digital Logbook Entry</span>
      </div>
      <div className="bg-white border border-gray-100 rounded-b-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-700">Equipment Cleaning Log — BPM-001</span>
          <span className="text-[9px] px-2 py-0.5 bg-green-50 text-green-600 rounded-full">21 CFR Part 11</span>
        </div>
        <div className="space-y-2">
          {[
            { time: "06:00 AM", user: "J. Smith", action: "Pre-production cleaning started", sig: "e-Signed ✓" },
            { time: "06:45 AM", user: "J. Smith", action: "Cleaning completed — visual inspection passed", sig: "e-Signed ✓" },
            { time: "07:00 AM", user: "S. Wilson", action: "QA verification — approved for production", sig: "e-Signed ✓" },
            { time: "07:15 AM", user: "System", action: "Equipment status: Ready for use", sig: "System ✓" },
          ].map((entry, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-2.5">
              <div className="text-[9px] text-gray-400 w-14 shrink-0">{entry.time}</div>
              <div className="flex-1">
                <div className="text-[10px] text-gray-700"><span className="font-semibold">{entry.user}</span> — {entry.action}</div>
              </div>
              <span className="text-[8px] text-green-600 font-medium shrink-0">{entry.sig}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

