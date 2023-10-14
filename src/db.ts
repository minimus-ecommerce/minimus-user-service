import pg from 'pg';

const { Client } = pg;
export const db = new Client({
    host: process.env["DB_HOST"],
    database: process.env["DB_NAME"],
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
})

db.query(
    `CREATE TABLE IF NOT EXISTS public.users
    (
        id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
        user_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
        first_name text COLLATE pg_catalog."default" NOT NULL,
        last_name text COLLATE pg_catalog."default",
        created_at date NOT NULL DEFAULT now(),
        password text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
        CONSTRAINT users_pkey PRIMARY KEY (id),
        CONSTRAINT "unique user_name" UNIQUE (user_name)
    )

    TABLESPACE pg_default;

    ALTER TABLE IF EXISTS public.users
        OWNER to postgres;

    COMMENT ON CONSTRAINT "unique user_name" ON public.users
        IS 'ensure user_name is unique';`
    , (err, res) => {
        console.log(err, res)
        if (err) db.end()
    }
)
