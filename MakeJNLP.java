import java.io.*;

public class MakeJNLP {
    private static class JarFilter implements FileFilter {
	public boolean accept(File pathname) {
	    return pathname.getPath().substring(pathname.getPath().length()-4).equals(".jar");
	}
    }

    public static void main(String[] args) {
	try {
	    File f = new File(System.getProperty("user.dir"));
	    String jnlpPath = f.getPath()+"/Excel_IPs/Excel_IPs.jnlp";
	    String scriptPath = f.getPath()+"/Excel_IPs/manifest.sh";
	    File jnlp = new File(jnlpPath);
	    File script = new File(scriptPath);
	    String manifest = "manifest.txt";
	    File folder = new File(f.getPath()+"/Excel_IPs/libs");
	    PrintStream jnlpStream = new PrintStream(jnlp), scriptStream = new PrintStream(script);
	    jnlpStream.println("<jnlp spec=\"1.0+\" codebase=\"https://alexfortis.github.io/Excel_IPs\" href=\"" + jnlp.getName() + "\"/>");
	    jnlpStream.println("\t<information>");
	    jnlpStream.println("\t\t<title>Excel IPs</title>");
	    jnlpStream.println("\t\t<vendor>Alex Strong</vendor>");
	    jnlpStream.println("\t\t<description>Edits Excel spreadsheets that determine who should be banned from NYSPI's network for lack of OCS</description>");
	    jnlpStream.println("\t\t<offline-allowed/>");
	    jnlpStream.println("\t</information>");
	    JarFilter jf = new JarFilter();
	    jnlpStream.println("\t<resources>");
	    jnlpStream.println("\t\t<j2se version=\"1.8+\" href=\"java.oracle.com/products/autodl/j2se\" java-vm-args=\"-Djava.net.preferIPv4Stack=true\"/>");
	    File[] jars = folder.listFiles(jf);
	    String[] names = new String[jars.length];
	    //System.out.println("Processing files...");
	    for(int i = 0; i < jars.length; i++) {
		names[i] = folder.getName() + "/" + jars[i].getName();
		//System.out.println("Now processing " + names[i]);
		jnlpStream.println("\t\t<jar href=\"" + names[i] + "\"/>");
		String addManifest = "jar ufm " + names[i] + " ../manifest.txt";
		String signJar = "jarsigner " + names[i] + " alexstrong";
		scriptStream.println("echo \"" + addManifest + "\"");
		scriptStream.println(addManifest);
		scriptStream.println("echo \"" + signJar + "\"");
		scriptStream.println(signJar);
	    }
	    jnlpStream.println("\t</resources>");
	    jnlpStream.println("\t<security>\n\t\t<all-permissions/>\n\t</security>");
	    jnlpStream.println("\t<application-desc main-class=\"com.alexstrong.excel_ips.ExcelDriver\"/>");
	    jnlpStream.println("</jnlp>");
	    //System.out.println("Done.");
	}
	catch(FileNotFoundException fnfe) {
	    System.out.println("Missing file.");
	}
    }
}