import IssueForm from "./_components/IssueForm";
const NewIssue = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  // const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  //   ssr: false, // 关闭服务端渲染
  // });
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<issueForm>({
    resolver: zodResolver(ValidationSchema),
  });
  const [eerror, setEerror] = useState("");
  const [loading, Setloading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    await delay(1000);
    try {
      Setloading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setEerror("an unexpected error occurred!");
    }
  });
  return (
    <div className="max-w-xl">
      {eerror && (
        <Callout.Root color="red">
          <Callout.Text>{eerror}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-2 space-x-4 max-w-xl">
        <div className="flex items-center justify-center">
          <span>New Issue Create</span>
        </div>
        <TextField.Input
          placeholder="Input the Issue Title here..."
          {...register("title")}
        />
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE
              placeholder="Input the Issue Description here..."
              {...field}
            />
          )}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}

        <Button disabled={loading}>
          Create New Issue
          {loading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssue;
