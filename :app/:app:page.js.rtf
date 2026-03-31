{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
import \{ Card, CardContent \} from "@/components/ui/card";\
import \{ Button \} from "@/components/ui/button";\
\
export default function LeagueSite() \{\
  const [page, setPage] = useState("home");\
  const [selectedTeam, setSelectedTeam] = useState(null);\
\
  const teams = ["Kanarek","Schiller","Hynes","Ackerman","Driansky","Mangui","Levine","Granoff","Gerstein","Carpien","Narod"];\
\
  const [standings, setStandings] = useState(\
    teams.map((team) => (\{ team, wins: 0, losses: 0 \}))\
  );\
\
  const [games, setGames] = useState([]);\
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);\
  const [boxScores, setBoxScores] = useState(\{\});\
\
  const [newGame, setNewGame] = useState(\{ teamA: "", teamB: "", scoreA: "", scoreB: "" \});\
  const [statInput, setStatInput] = useState(\{ team: "", player: "", points: "", rebounds: "", assists: "" \});\
\
  const addGame = () => \{\
    const scoreA = parseInt(newGame.scoreA);\
    const scoreB = parseInt(newGame.scoreB);\
\
    const updatedStandings = standings.map((t) => \{\
      if (t.team === newGame.teamA) \{\
        return \{ ...t, wins: scoreA > scoreB ? t.wins + 1 : t.wins, losses: scoreA < scoreB ? t.losses + 1 : t.losses \};\
      \}\
      if (t.team === newGame.teamB) \{\
        return \{ ...t, wins: scoreB > scoreA ? t.wins + 1 : t.wins, losses: scoreB < scoreA ? t.losses + 1 : t.losses \};\
      \}\
      return t;\
    \});\
\
    setStandings(updatedStandings);\
    setGames([...games, \{ ...newGame, score: `$\{scoreA\}-$\{scoreB\}` \}]);\
    setNewGame(\{ teamA: "", teamB: "", scoreA: "", scoreB: "" \});\
  \};\
\
  const addStatLine = () => \{\
    if (selectedGameIndex === null) return;\
\
    const gameStats = boxScores[selectedGameIndex] || [];\
\
    const updatedStats = [\
      ...gameStats,\
      \{\
        ...statInput,\
        points: parseInt(statInput.points),\
        rebounds: parseInt(statInput.rebounds),\
        assists: parseInt(statInput.assists),\
      \},\
    ];\
\
    setBoxScores(\{ ...boxScores, [selectedGameIndex]: updatedStats \});\
\
    setStatInput(\{ team: "", player: "", points: "", rebounds: "", assists: "" \});\
  \};\
\
  const getAllPlayerStats = () => \{\
    const allStats = Object.values(boxScores).flat();\
\
    return allStats.reduce((acc, p) => \{\
      const existing = acc.find((x) => x.player === p.player);\
      if (existing) \{\
        existing.points += p.points;\
        existing.rebounds += p.rebounds;\
        existing.assists += p.assists;\
        existing.games += 1;\
      \} else \{\
        acc.push(\{ ...p, games: 1 \});\
      \}\
      return acc;\
    \}, []).map((p) => (\{\
      ...p,\
      ppg: (p.points / p.games).toFixed(1),\
      rpg: (p.rebounds / p.games).toFixed(1),\
      apg: (p.assists / p.games).toFixed(1),\
    \}));\
  \};\
\
  const getTeamStats = (team) => \{\
    return getAllPlayerStats().filter((p) => p.team === team);\
  \};\
\
  const leaders = getAllPlayerStats().sort((a, b) => b.ppg - a.ppg);\
\
  return (\
    <div className="p-6 space-y-6">\
      <h1 className="text-3xl font-bold">JCC Basketball League</h1>\
\
      <div className="flex gap-2 flex-wrap">\
        <Button onClick=\{() => setPage("home")\}>Home</Button>\
        <Button onClick=\{() => setPage("standings")\}>Standings</Button>\
        <Button onClick=\{() => setPage("schedule")\}>Schedule</Button>\
        <Button onClick=\{() => setPage("teams")\}>Teams</Button>\
        <Button onClick=\{() => setPage("leaders")\}>Leaders</Button>\
        <Button onClick=\{() => setPage("admin")\}>Admin</Button>\
      </div>\
\
      \{page === "leaders" && (\
        <Card>\
          <CardContent className="p-4">\
            <h2 className="text-xl font-semibold">League Leaders</h2>\
            <table className="w-full mt-4">\
              <thead>\
                <tr>\
                  <th>Player</th>\
                  <th>Team</th>\
                  <th>PPG</th>\
                  <th>RPG</th>\
                  <th>APG</th>\
                  <th>Games</th>\
                </tr>\
              </thead>\
              <tbody>\
                \{leaders.map((p, i) => (\
                  <tr key=\{i\}>\
                    <td>\{p.player\}</td>\
                    <td>\{p.team\}</td>\
                    <td>\{p.ppg\}</td>\
                    <td>\{p.rpg\}</td>\
                    <td>\{p.apg\}</td>\
                    <td>\{p.games\}</td>\
                  </tr>\
                ))\}\
              </tbody>\
            </table>\
          </CardContent>\
        </Card>\
      )\}\
\
      \{page === "teams" && !selectedTeam && (\
        <Card>\
          <CardContent className="p-4">\
            <h2 className="text-xl font-semibold">Teams</h2>\
            <div className="grid grid-cols-2 gap-2 mt-4">\
              \{teams.map((team) => (\
                <Button key=\{team\} onClick=\{() => setSelectedTeam(team)\}>\{team\}</Button>\
              ))\}\
            </div>\
          </CardContent>\
        </Card>\
      )\}\
\
      \{page === "teams" && selectedTeam && (\
        <Card>\
          <CardContent className="p-4">\
            <Button onClick=\{() => setSelectedTeam(null)\}>\uc0\u8592  Back</Button>\
            <h2 className="text-xl font-semibold mt-2">\{selectedTeam\}</h2>\
            <table className="w-full mt-4">\
              <thead>\
                <tr>\
                  <th>Player</th>\
                  <th>PPG</th>\
                  <th>RPG</th>\
                  <th>APG</th>\
                  <th>Games</th>\
                </tr>\
              </thead>\
              <tbody>\
                \{getTeamStats(selectedTeam).map((p, i) => (\
                  <tr key=\{i\}>\
                    <td>\{p.player\}</td>\
                    <td>\{p.ppg\}</td>\
                    <td>\{p.rpg\}</td>\
                    <td>\{p.apg\}</td>\
                    <td>\{p.games\}</td>\
                  </tr>\
                ))\}\
              </tbody>\
            </table>\
          </CardContent>\
        </Card>\
      )\}\
\
      \{page === "schedule" && (\
        <Card>\
          <CardContent className="p-4">\
            <h2 className="text-xl font-semibold">Games</h2>\
            <ul className="mt-4 space-y-2">\
              \{games.map((g, i) => (\
                <li key=\{i\} className="flex justify-between">\
                  <span>\{g.teamA\} vs \{g.teamB\} \'97 \{g.score\}</span>\
                  <Button onClick=\{() => setSelectedGameIndex(i)\}>Box Score</Button>\
                </li>\
              ))\}\
            </ul>\
          </CardContent>\
        </Card>\
      )\}\
\
      \{selectedGameIndex !== null && (\
        <Card>\
          <CardContent className="p-4 space-y-2">\
            <Button onClick=\{() => setSelectedGameIndex(null)\}>\uc0\u8592  Back</Button>\
            <h2 className="text-xl font-semibold">Enter Box Score</h2>\
\
            <input placeholder="Team" value=\{statInput.team\} onChange=\{(e) => setStatInput(\{ ...statInput, team: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Player" value=\{statInput.player\} onChange=\{(e) => setStatInput(\{ ...statInput, player: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Points" value=\{statInput.points\} onChange=\{(e) => setStatInput(\{ ...statInput, points: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Rebounds" value=\{statInput.rebounds\} onChange=\{(e) => setStatInput(\{ ...statInput, rebounds: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Assists" value=\{statInput.assists\} onChange=\{(e) => setStatInput(\{ ...statInput, assists: e.target.value \})\} className="border p-2 w-full" />\
\
            <Button onClick=\{addStatLine\}>Add Stat Line</Button>\
\
            <h3 className="mt-4 font-semibold">Current Box Score</h3>\
            <ul>\
              \{(boxScores[selectedGameIndex] || []).map((s, i) => (\
                <li key=\{i\}>\{s.player\} (\{s.team\}) - \{s.points\}/\{s.rebounds\}/\{s.assists\}</li>\
              ))\}\
            </ul>\
          </CardContent>\
        </Card>\
      )\}\
\
      \{page === "admin" && (\
        <Card>\
          <CardContent className="p-4 space-y-2">\
            <h2 className="text-xl font-semibold">Add Game</h2>\
            <input placeholder="Team A" value=\{newGame.teamA\} onChange=\{(e) => setNewGame(\{ ...newGame, teamA: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Team B" value=\{newGame.teamB\} onChange=\{(e) => setNewGame(\{ ...newGame, teamB: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Score A" value=\{newGame.scoreA\} onChange=\{(e) => setNewGame(\{ ...newGame, scoreA: e.target.value \})\} className="border p-2 w-full" />\
            <input placeholder="Score B" value=\{newGame.scoreB\} onChange=\{(e) => setNewGame(\{ ...newGame, scoreB: e.target.value \})\} className="border p-2 w-full" />\
            <Button onClick=\{addGame\}>Submit Game</Button>\
          </CardContent>\
        </Card>\
      )\}\
    </div>\
  );\
\}\
}