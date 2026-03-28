"use client";

/**
 * CSS-built dashboard mockups that simulate actual app UIs
 * for the product feature showcase sections.
 */

// QMS - AI Investigator mockup (6M fishbone diagram)
export function AIInvestigatorMockup() {
  const fishboneItems = [
    { icon: "👤", label: "MAN", count: "3 Hypotheses" },
    { icon: "⚙️", label: "Machine", count: "2 Hypotheses" },
    { icon: "📋", label: "Method", count: "4 Hypotheses" },
    { icon: "📦", label: "Material", count: "2 Hypotheses" },
    { icon: "📐", label: "Measurement", count: "1 Hypothesis" },
    { icon: "🌡️", label: "Environment", count: "1 Hypothesis" },
  ];

  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">New York Plant</span>
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Quality Team</span>
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[9px]">SJ</div>
        </div>
      </div>
      {/* Sidebar + content */}
      <div className="flex">
        {/* Sidebar icons */}
        <div className="w-10 bg-gray-50 border-r border-gray-100 flex flex-col items-center gap-3 py-4">
          {["📊", "📁", "📝", "🔍", "⚡", "💬", "👥"].map((icon, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${i === 0 ? "bg-blue-50" : ""}`}>
              {icon}
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-gray-900">Temperature Excursion in Storage Area B</span>
            <span className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-orange-100 text-orange-700">Investigation In Progress</span>
          </div>
          <div className="text-xs text-gray-500 mb-4">Root Cause Analysis</div>
          {/* 6M Grid */}
          <div className="grid grid-cols-3 gap-2">
            {fishboneItems.map((item) => (
              <div key={item.label} className="border border-gray-100 rounded-lg p-3 hover:border-blue-200 transition-colors">
                <div className="text-lg mb-1">{item.icon}</div>
                <div className="text-xs font-semibold text-gray-900">{item.label}</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[9px] text-gray-500">NovaRx AI-Generated {item.count}</span>
                </div>
                <div className="text-[9px] text-blue-600 mt-1 cursor-pointer">View & Analyze ↗</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// QMS - FDA Tracker mockup
export function FDATrackerMockup() {
  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-wider">FDA</span>
          <span className="text-[9px] text-gray-400 uppercase tracking-widest">TRACKER</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Feedback</span>
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-[9px]">AI</div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-gray-100 px-4">
        <div className="px-3 py-2 text-xs font-medium text-blue-600 border-b-2 border-blue-600">Dashboard</div>
        <div className="px-3 py-2 text-xs text-gray-400">Home</div>
        <div className="px-3 py-2 text-xs text-gray-400">483 Analysis</div>
        <div className="px-3 py-2 text-xs text-gray-400">Investigators</div>
      </div>
      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Total 483s", value: "2,847", trend: "+12%" },
            { label: "Warning Letters", value: "156", trend: "-8%" },
            { label: "Active Investigations", value: "423", trend: "+5%" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg p-3">
              <div className="text-[9px] text-gray-500 uppercase tracking-wide">{stat.label}</div>
              <div className="text-lg font-bold text-gray-900 mt-1">{stat.value}</div>
              <div className={`text-[9px] mt-0.5 ${stat.trend.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{stat.trend} vs last year</div>
            </div>
          ))}
        </div>
        {/* Chart placeholder */}
        <div className="bg-gray-50 rounded-lg p-3 h-24 flex items-end gap-1">
          {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-400/60 rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5 px-1">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
            <span key={m} className="text-[7px] text-gray-400">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// QMS - Cleaning Validation mockup
export function CleaningValidationMockup() {
  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Boston Plant</span>
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">CLEEN</span>
          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[9px]">JW</div>
        </div>
      </div>
      {/* Sidebar + content */}
      <div className="flex">
        <div className="w-10 bg-gray-50 border-r border-gray-100 flex flex-col items-center gap-3 py-4">
          {["📊", "📁", "📝", "🔍", "⚡", "👥"].map((icon, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${i === 2 ? "bg-blue-50" : ""}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">Reports</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { title: "Production Limits", desc: "View how Worst-case Rankings are determined on the basis of different selection rules and scores." },
              { title: "Equipment Limits", desc: "View how limits are calculated for Equipment on the basis of various combinations." },
              { title: "Worst Case Rankings", desc: "View how Worst-case Rankings are determined on the basis of different selection rules." },
              { title: "Cleaning Agent Limits", desc: "View how limits are calculated for Cleaning Agents on the basis of various combinations." },
              { title: "Procedure Residue Trending", desc: "See how residue has been trending over time for a Cleaning Procedure." },
              { title: "Location-wise Trending", desc: "See how residue on Equipment Locations is trending over time." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-3 border-l-2 border-cyan-400">
                <div className="text-xs font-semibold text-gray-900">{item.title}</div>
                <div className="text-[9px] text-gray-500 mt-1 leading-snug">{item.desc}</div>
                <div className="text-[9px] text-cyan-600 mt-1.5 cursor-pointer">View</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// LES - Environmental Monitoring mockup
export function EnvironmentalMonitoringMockup() {
  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Berlin Plant</span>
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">EM System</span>
        </div>
      </div>
      <div className="flex">
        <div className="w-10 bg-gray-50 border-r border-gray-100 flex flex-col items-center gap-3 py-4">
          {["🏠", "📋", "🧪", "📊", "⚠️", "📥"].map((icon, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${i === 2 ? "bg-emerald-50" : ""}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-900">Environmental Monitoring Dashboard</div>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 text-[9px] rounded bg-green-100 text-green-700">Grade A: 12</span>
              <span className="px-2 py-0.5 text-[9px] rounded bg-blue-100 text-blue-700">Grade B: 24</span>
            </div>
          </div>
          {/* Sample tracking table */}
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 bg-gray-50 text-[9px] font-semibold text-gray-600 uppercase tracking-wide">
              <div className="px-2 py-2">Location</div>
              <div className="px-2 py-2">Type</div>
              <div className="px-2 py-2">Status</div>
              <div className="px-2 py-2">CFU Count</div>
              <div className="px-2 py-2">Action</div>
            </div>
            {[
              { loc: "Room 201-A", type: "Settle Plate", status: "Pass", cfu: "< 1", statusColor: "text-green-600" },
              { loc: "Room 201-B", type: "Active Air", status: "Pass", cfu: "3", statusColor: "text-green-600" },
              { loc: "Room 301-A", type: "Surface", status: "Alert", cfu: "12", statusColor: "text-amber-600" },
              { loc: "Room 301-B", type: "Settle Plate", status: "Pass", cfu: "< 1", statusColor: "text-green-600" },
              { loc: "Room 401-A", type: "Active Air", status: "Excursion", cfu: "28", statusColor: "text-red-600" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-5 text-[10px] border-t border-gray-50">
                <div className="px-2 py-2 font-medium text-gray-900">{row.loc}</div>
                <div className="px-2 py-2 text-gray-500">{row.type}</div>
                <div className={`px-2 py-2 font-medium ${row.statusColor}`}>{row.status}</div>
                <div className="px-2 py-2 text-gray-600">{row.cfu}</div>
                <div className="px-2 py-2 text-blue-600 cursor-pointer">View →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// LES - Instrument Logbooks mockup
export function InstrumentLogbooksMockup() {
  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Instruments</span>
        </div>
      </div>
      <div className="flex">
        <div className="w-10 bg-gray-50 border-r border-gray-100 flex flex-col items-center gap-3 py-4">
          {["🏠", "📋", "🔧", "📊", "🔔", "⚙️"].map((icon, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${i === 2 ? "bg-emerald-50" : ""}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">Instrument Overview</div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "Total Instruments", value: "186", color: "bg-blue-50 text-blue-700" },
              { label: "Calibrated", value: "154", color: "bg-green-50 text-green-700" },
              { label: "Due Soon", value: "22", color: "bg-amber-50 text-amber-700" },
              { label: "Overdue", value: "10", color: "bg-red-50 text-red-700" },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-lg p-3 ${stat.color}`}>
                <div className="text-[9px] font-medium uppercase tracking-wide opacity-70">{stat.label}</div>
                <div className="text-lg font-bold mt-0.5">{stat.value}</div>
              </div>
            ))}
          </div>
          {/* Instrument list */}
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 text-[9px] font-semibold text-gray-600 uppercase tracking-wide">
              <div className="px-2 py-2">Instrument</div>
              <div className="px-2 py-2">Last Calibrated</div>
              <div className="px-2 py-2">Next Due</div>
              <div className="px-2 py-2">Status</div>
            </div>
            {[
              { name: "HPLC-001", last: "2025-09-15", next: "2026-03-15", status: "Calibrated", sColor: "text-green-600" },
              { name: "pH Meter-003", last: "2025-11-20", next: "2026-02-20", status: "Due Soon", sColor: "text-amber-600" },
              { name: "Balance-007", last: "2025-08-10", next: "2026-02-10", status: "Overdue", sColor: "text-red-600" },
              { name: "Spectro-012", last: "2025-12-01", next: "2026-06-01", status: "Calibrated", sColor: "text-green-600" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 text-[10px] border-t border-gray-50">
                <div className="px-2 py-2 font-medium text-gray-900">{row.name}</div>
                <div className="px-2 py-2 text-gray-500">{row.last}</div>
                <div className="px-2 py-2 text-gray-500">{row.next}</div>
                <div className={`px-2 py-2 font-medium ${row.sColor}`}>{row.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// MES - Batch Execution mockup
export function BatchExecutionMockup() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Chicago Plant</span>
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">MES</span>
          <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[9px]">RK</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-10 bg-gray-50 border-r border-gray-100 flex flex-col items-center gap-3 py-4">
          {["📊", "📁", "📝", "🔍", "⚡", "👥"].map((icon, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${i === 0 ? "bg-indigo-50" : ""}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-gray-900">Batch Record Execution</span>
            <span className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-green-100 text-green-700">Active</span>
          </div>
          <div className="text-xs text-gray-500 mb-4">Batch #BX-2026-0342 • Amoxicillin 500mg</div>
          <div className="space-y-2">
            {[
              { step: "Weighing & Dispensing", status: "completed", time: "2h 15m" },
              { step: "Granulation", status: "completed", time: "3h 42m" },
              { step: "Compression", status: "in-progress", time: "1h 20m" },
              { step: "Coating", status: "pending", time: "—" },
              { step: "Packaging", status: "pending", time: "—" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  item.status === "completed" ? "bg-green-500" : item.status === "in-progress" ? "bg-blue-500 animate-pulse" : "bg-gray-200"
                }`}>
                  {item.status === "completed" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  )}
                  {item.status === "in-progress" && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <div className="flex-1">
                  <div className={`text-xs font-medium ${item.status === "completed" ? "text-gray-400 line-through" : item.status === "in-progress" ? "text-blue-600" : "text-gray-500"}`}>
                    {item.step}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// MES - Batch Intelligence mockup
export function BatchIntelligenceMockup() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">OTIF Analytics</span>
          <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[9px] font-bold">Live</span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-gray-900 mb-3">Production Intelligence Dashboard</div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Current OTIF", value: "94.5%", trend: "+5.2%", tColor: "text-green-600" },
            { label: "Avg Delay", value: "1.8 days", trend: "-0.2d", tColor: "text-green-600" },
            { label: "Active Batches", value: "23", trend: "+3", tColor: "text-blue-600" },
            { label: "At Risk", value: "4", trend: "-1", tColor: "text-amber-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg p-3">
              <div className="text-[9px] text-gray-500 uppercase tracking-wide">{stat.label}</div>
              <div className="text-lg font-bold text-gray-900 mt-1">{stat.value}</div>
              <div className={`text-[9px] mt-0.5 ${stat.tColor}`}>{stat.trend} vs last month</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="bg-gray-50 rounded-lg p-3 h-24 flex items-end gap-1">
          {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 90].map((h, i) => (
            <div key={i} className="flex-1 bg-indigo-400/60 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1.5 px-1">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
            <span key={m} className="text-[7px] text-gray-400">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// MES - Production Logbooks mockup
export function ProductionLogbooksMockup() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-[8px] font-bold">N</div>
          <div className="w-1 h-1 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-slate-700 text-[10px]">Production Logbooks</span>
        </div>
      </div>
      <div className="flex">
        <div className="w-10 bg-gray-50 border-r border-gray-100 flex flex-col items-center gap-3 py-4">
          {["🏠", "📋", "🔧", "📊", "🔔", "⚙️"].map((icon, i) => (
            <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-[10px] ${i === 1 ? "bg-indigo-50" : ""}`}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="text-sm font-semibold text-gray-900 mb-3">Blister Pack Machine Log</div>
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 bg-gray-50 text-[9px] font-semibold text-gray-600 uppercase tracking-wide">
              <div className="px-2 py-2">Status</div>
              <div className="px-2 py-2">Job ID</div>
              <div className="px-2 py-2">Started By</div>
              <div className="px-2 py-2">Start Date</div>
              <div className="px-2 py-2">Action</div>
            </div>
            {[
              { status: "Completed", id: "87543", user: "J. Doe", date: "2026-03-20", sColor: "bg-green-50 text-green-600" },
              { status: "In Progress", id: "74785", user: "J. Smith", date: "2026-03-22", sColor: "bg-blue-50 text-blue-600" },
              { status: "Completed", id: "78500", user: "R. Brown", date: "2026-03-18", sColor: "bg-green-50 text-green-600" },
              { status: "Completed", id: "39665", user: "E. Davis", date: "2026-03-15", sColor: "bg-green-50 text-green-600" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-5 text-[10px] border-t border-gray-50">
                <div className="px-2 py-2">
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${row.sColor}`}>{row.status}</span>
                </div>
                <div className="px-2 py-2 font-medium text-gray-900">{row.id}</div>
                <div className="px-2 py-2 text-gray-500">{row.user}</div>
                <div className="px-2 py-2 text-gray-500">{row.date}</div>
                <div className="px-2 py-2 text-indigo-600 cursor-pointer">View →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

