import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loading from "../components/Loading";

function VeirfyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (secret === null || secret === undefined) {
      navigate("/");
    }
    if(secret && userId) {
        verifyEmail();
    }
  }, [secret]);

  const verifyEmail = async () => {
    setLoading((prev) => true);
  };

  if (loading) return <Loading text={'Verifying Email'} />;

  return null;
}

export default VeirfyEmail;
