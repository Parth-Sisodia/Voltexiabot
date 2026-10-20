import sqlite3

DB = "data.db"

def init_db():
    conn = sqlite3.connect(DB)
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS global_verification (
            user_id INTEGER PRIMARY KEY,
            verified INTEGER
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS guild_settings (
            guild_id INTEGER PRIMARY KEY,
            punishment_channel INTEGER,
            ticket_category INTEGER,
            staff_role INTEGER
        )
    """)

    conn.commit()
    conn.close()


def set_verified(user_id, status):
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    cur.execute("INSERT OR REPLACE INTO global_verification VALUES (?, ?)", (user_id, status))
    conn.commit()
    conn.close()


def is_verified(user_id):
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    cur.execute("SELECT verified FROM global_verification WHERE user_id = ?", (user_id,))
    row = cur.fetchone()
    conn.close()
    return row and row[0] == 1


def get_guild_settings(guild_id):
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    cur.execute("SELECT punishment_channel, ticket_category, staff_role FROM guild_settings WHERE guild_id = ?", (guild_id,))
    row = cur.fetchone()
    conn.close()

    if not row:
        return None

    return {
        "punishment_channel": row[0],
        "ticket_category": row[1],
        "staff_role": row[2]
    }


def set_guild_settings(guild_id, punishment_channel, ticket_category, staff_role):
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    cur.execute("""
        INSERT OR REPLACE INTO guild_settings VALUES (?, ?, ?, ?)
    """, (guild_id, punishment_channel, ticket_category, staff_role))
    conn.commit()
    conn.close()
  
