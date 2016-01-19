import java.io.*;

public class ResetManifest {
    private static class JarFilter implements FileFilter {
	public boolean accept(File pathname) {
	    return pathname.getPath().substring(pathname.getPath().length()-4).equals(".jar");
	}
    }
    public static void main(String[] args) {
	try {
	    File f = new File(System.getProperty("user.dir"));
	    String path = f.getPath()+"/Excel_IPs/resetManifest.sh";
	    File script = new File(path);
	    String manifest = "manifest.txt";
	    File folder = new File(f.getPath()+"/Excel_IPs/libs");
	    PrintStream stream = new PrintStream(script);
	    JarFilter jf = new JarFilter();
	    File[] jars = folder.listFiles(jf);
	    String[] names = new String[jars.length];
	    String temp = "";
	    for(int i = 0; i < jars.length; i++) {
		names[i] = folder.getName() + "/" + jars[i].getName();
		temp = names[i].substring(0, names[i].length()-4);
		stream.println("echo \"unzip " + names[i] + " -d " + temp + "\"");
		stream.println("unzip " + names[i] + " -d " + temp);
		stream.println("echo \"rm -rf " + temp + "/META-INF" + "\"");
		stream.println("rm -rf " + temp + "/META-INF");
		stream.println("echo \"zip -r " + temp + ".zip " + temp + "\"");
		stream.println("zip -r " + temp + ".zip " + temp);
		stream.println("echo \"rm -rf " + names[i] + "\"");
		stream.println("rm -rf " + names[i]);
		stream.println("echo \"mv " + temp + ".zip " + names[i] + "\"");
		stream.println("mv " + temp + ".zip " + names[i]);
		stream.println("echo \"jar ufm " + names[i] + " ../manifest.txt" + "\"");
		stream.println("jar ufm " + names[i] + " ../manifest.txt"); 
		stream.println("echo \"jarsigner " + names[i] + " alexstrong" + "\"");
		stream.println("jarsigner " + names[i] + " alexstrong");
	    }
	}
	catch(Throwable t) {
	    t.printStackTrace();
	}
    }
}